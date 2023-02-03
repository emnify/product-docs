---
description: Code samples showing how to use the SDK
---

# Examples

## Initialize the client using environment variables

```java
    EMnify.authenticate();
```

## Initialize the client via passing authorization parameter

```java
    String username = "user@domain.com";
    String password = "2fd4e1c67a2d28...";
    
    EMnify.authenticate(username, password)
```

## Initialize the client via application token

```java
    String applicationToken = "KAOp24TuMgjO2FpZmZ3ZFjSqpk7ea_mY8...";
    
    EMnify.authenticate(applicationToken)
```

## Retrieve list of endpoints

```java
    EMnify client = EMnify.authenticate();
    List<Endpoint> endpoints = client.getEndpointClient().listEndpoints();
```

## Update endpoint quota data

```java
    Quota quota = new Quota();
    quota.setVolume(actualVolume + quotaTopUpVolume);
    quota.setExpiryDate(expirationDate);
    quota.setThresholdPercentage(threholdPercentage);
    quota.setActionOnExhaustion(QuotaActionOnExhaustion.throttle(QuotaActionOnExhaustion.QuotaPeakThroughput.SLOW));
    
    endpointClient.saveQuota(endpointId, quota);
```
