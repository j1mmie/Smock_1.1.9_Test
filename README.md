# Smock_1.1.9_Test

This repo reproduces issue #1275 of ethereum-optimism Smock: https://github.com/ethereum-optimism/optimism/issues/1275

To reproduce:

```
git clone git@github.com:j1mmie/Smock_1.1.9_Test.git
cd Smock_1.1.9_Test
npm install
npx hardhat test
```

You should see the following output:

```
Compiling 1 file with 0.8.4
Compilation finished successfully


  SmockTest
    1) Should store value as true


  0 passing (478ms)
  1 failing

  1) SmockTest
       Should store value as true:

      AssertionError: expected false to equal true
      + expected - actual

      -false
      +true
      
      at Context.<anonymous> (test/SmockTest.spec.ts:16:47)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at runNextTicks (node:internal/process/task_queues:65:3)
      at listOnTimeout (node:internal/timers:526:9)
      at processTimers (node:internal/timers:500:7)

```

The test in SmockTest is expected to pass
