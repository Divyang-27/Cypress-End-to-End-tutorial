# Setting up Jenkins with Cypress (Freestyle Project on Windows)

## Step 1: Install Java
Jenkins requires Java to run. Install Java with the following steps:
1. Download Java (JDK) from [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html).
2. Install it and set up the **JAVA_HOME** environment variable.
3. Verify installation:
   ```sh
   java -version
   ```

## Step 2: Install Jenkins
1. Download Jenkins from [https://www.jenkins.io/download/](https://www.jenkins.io/download/).
2. Install it and start Jenkins.
3. Open Jenkins in a browser: `http://localhost:8080`.
4. Retrieve the administrator password from:
   ```sh
   C:\Program Files\Jenkins\secrets\initialAdminPassword
   ```
5. Complete the setup by installing the recommended plugins.

## Step 3: Configure Tools in Jenkins
### Install Git
1. Download Git from [https://git-scm.com/downloads](https://git-scm.com/downloads) and install it.
2. Verify installation:
   ```sh
   git --version
   ```

### Install Node.js
1. Download Node.js from [https://nodejs.org](https://nodejs.org) and install it.
2. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### Configure Git & Node.js in Jenkins
1. Navigate to **Manage Jenkins** > **Global Tool Configuration**.
2. Under **Git**, specify the Git installation path if not detected automatically.
3. Under **NodeJS**, add a new NodeJS installation and check "Install automatically".

## Step 4: Create a Freestyle Project in Jenkins
1. Open Jenkins and click **New Item**.
2. Select **Freestyle Project**, name it, and click **OK**.
3. Under **Source Code Management**, select **Git**.
4. In the **Repository URL**, enter:
   ```
   https://github.com/Divyang-27/jenkins.git
   ```
5. In **Branch Specifier**, enter `main`.

## Step 5: Add Cypress Commands in Windows Batch Command
1. Under **Build** > **Add Build Step** > **Execute Windows Batch Command**.
2. Add the following:
   ```bat
   cd C:\path\to\workspace\jenkins
   npm init -y
   npm install cypress cypress-mochawesome-reporter
   npx cypress run --reporter mocha-awesome --spec cypress/integration/test/testSauceLab.cy.js
   ```

## Step 6: Configure Mocha Awesome Report in Jenkins
1. In the **Post-build Actions** section, click **Add post-build action** > **Publish HTML reports**.
2. Configure it as follows:
   - **HTML directory to archive**: `cypress/reports`
   - **Index page(s)**: `mochawesome.html`
   - **Report title**: `Cypress Test Report`
3. Save the configuration.

## Step 7: Run the Job
1. Click **Build Now** to trigger the Cypress test run.
2. After execution, navigate to **Build Artifacts** > **Cypress Test Report** to view Mocha Awesome reports.

## Conclusion
You have successfully set up Jenkins with Cypress using a Freestyle project, configured tools, and integrated a GitHub repository with Cypress test execution.

