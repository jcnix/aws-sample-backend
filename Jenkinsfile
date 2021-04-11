pipeline {
    agent {
        label 'build'
    }
    stages {
        
        stage('deploy') {
            steps {
                sh '''
                    aws s3 sync swagger s3://jcnix-api-dev --delete --acl bucket-owner-full-control
                '''
            }
        }
    }
}