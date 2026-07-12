pipeline {
    agent any

    tools {
        nodejs 'Node22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('List Build Output') {
            steps {
                sh 'ls -lah dist'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                rsync -av --delete dist/ deploy@10.5.0.101:/var/www/portfolio/
            '''
            }
        }
    }
}
