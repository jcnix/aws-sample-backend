pipeline {
    agent {
        label 'build'
    }
    stages {
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
                    aws s3 sync swagger s3://jcnix-api-dev --delete --acl bucket-owner-full-control
                '''
            }
        }
    }
}