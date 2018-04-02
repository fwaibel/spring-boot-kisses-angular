node {
    stage('checkout') {
        checkout scm
    }

    stage('build') {
        sh './gradlew build'
    }

}
