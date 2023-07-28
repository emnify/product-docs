---
description: Step-by-step guide for installing and using the emnify Java SDK
pagination_prev: sdks/python/quickstart
pagination_next: sdks/java/examples
slug: /sdks/java/quickstart
---

# Getting started with the emnify Java SDK

## Supported Java versions 

This library supports the following Java implementations:

- [OpenJDK 8](https://openjdk.org/projects/jdk8/)
- [OpenJDK 11](https://openjdk.org/projects/jdk/11/)
- [OracleJDK 8](https://www.oracle.com/java/technologies/downloads/#java8)
- [OracleJDK 11](https://www.oracle.com/java/technologies/downloads/#java11)

## TLS requirements

Refer to the [SSL Report table](https://www.ssllabs.com/ssltest/analyze.html?d=cdn.emnify.net&latest) for the supported Transport Layer Security (TLS) versions.

## Installation

The emnify Java SDK is open source and the [source code is available on GitHub](https://github.com/EMnify/emnify-sdk-java).

The recommended method for installing the SDK is with a build automation tool, like Maven or Gradle. 
You can add the emnify dependency to your existing project, specifying the latest version.

:::caution
Regardless of the package manager you are using, you need to specify the latest version of the emnify Java SDK.
The following examples use `{version}` where this should be specified.
:::

### Maven

Use the following dependency in your project to grab via [Maven](https://maven.apache.org/download.cgi):

```xml
    <dependency>
        <groupId>com.emnify.sdk</groupId>
        <artifactId>emnify</artifactId>
        <version>VERSION_NUMBER</version>
    </dependency>
```

Replace *`VERSION_NUMBER`* with the version of Maven you're using.

### Gradle

Use the following to add the emnify dependency to your project via [Gradle](https://gradle.org/install/):

```gradle
    implementation group: "com.emnify.sdk", name: "emnify", version: "VERSION_NUMBER"
```

Replace *`VERSION_NUMBER`* with the version of Gradle you're using.

### Compile the SDK yourself

If you want to compile it yourself, here's how:

```shell
    git clone git@github.com:emnify/emnify-sdk-java.git
    cd emnify-sdk-java
    mvn install # Requires Maven
```

If you want to build your own `.jar`, execute the following from within the cloned directory:

```shell
  mvn package
```

## Environment variables

You can use environment variables for storing configuration settings like an application token or a base URL instead of hardcoding them in your application.

| Name               | Description                                                              |
|--------------------|--------------------------------------------------------------------------|
| `EMNIFY_BASE_PATH` | Base URL to form a request. Default value:  `https://cdn.emnify.net` |
| `EMNIFY_APPLICATION_TOKEN`  | Variable for authenticating via an [application token](/rest/authentication#authenticate-with-an-application-token). |
| `EMNIFY_USERNAME` and `EMNIFY_PASSWORD` | Variables for authenticating via [username and password](/rest/authentication#authenticate-with-user-credentials). |

## Explore more 

Now that you have the SDK configured, it's time to learn what you can do with it.

If you're new to IoT connectivity and emnify, start by learning some [common terminology and concepts](/sdks/concepts). 

Once you're comfortable with these [concepts](/sdks/concepts), you can explore some use cases that show what the SDK is capable of based on a few [Examples](/sdks/java/examples). 

Also, see the [emnify System Documentation](https://cdn.emnify.net/api/doc/index.html) and our [OpenAPI specification](https://cdn.emnify.net/api/doc/swagger.html).
