pipeline {
    agent {
        label 'build'
    }
    stages {
        stage('initialize') {
            steps {
                sh '''
                    npm ci
                '''
            }
        }
        stage('verify') {
            steps {
                sh '''
                    npm run verify
                '''
            }
        }
        stage('deploy') {
            steps {
                sh '''
                    zip api.zip src/index.js
                    aws s3 sync api.zip s3://jcnix-api-dev --delete --acl bucket-owner-full-control
                '''
            }
        }
    }
}