export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "amplifyapps3": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "amps3GroupRole": "string"
        }
    },
    "storage": {
        "s3ampstore": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "amplifyapps3": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}