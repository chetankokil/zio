---
id: gen 
title: "Gen"
---

A `Gen[R, A]` represents a generator of values of type `A`, which requires an environment `R`. The `Gen` data type is the base functionality for generating test data for property-based testing. We use them to produce deterministic and non-deterministic (PRNG) random values.

It is encoded as a stream of optional samples:

```scala
case class Gen[-R, +A](sample: ZStream[R, Nothing, Option[Sample[R, A]]])
```

Before deep into the generators, let's see what is property-based testing and what problem it solves in the testing world.

## Generators Are Deterministic by Default

The important fact about generators is that they produce deterministic values. This means that if we run the same generator multiple times, it will always produce the same sequence of values. So the let us add some debugging print lines inside a test and see what values are produced:

```scala mdoc:compile-only
import zio.test._
import zio.test.TestAspect._

object ExampleSpec extends ZIOSpecDefault {
  def spec =
    test("example test") {
      check(Gen.int(0, 10)) { n =>
        println(n)
        assertTrue(n + n == 2 * n)
      }
    } @@ samples(5)
}
```

We can see, every time we run the test, the generator will produce the same sequence of values:

```scala
runSpec
9
3
0
9
6
+ example test
```

This is due to the fact that the generator uses a pseudo-random number generator which uses a deterministic algorithm. The generator provides a fixed seed number to its underlying deterministic algorithm to generate random numbers. As the seed number is fixed, the generator will always produce the same sequence of values. For more information, there is a separate page about this on [TestRandom](services/random.md) which is the underlying service for generating test values.

This behavior helps us to have reproducible tests. But, if we might need non-deterministic tests values, we can use the `TestAspect.nondeterministic` to change the default behavior:

```scala mdoc:invisible
import zio.test._
val myspec: Spec[Any, Nothing] = test("my test") { assertTrue(true) }
```

```scala mdoc:compile-only
myspec @@ TestAspect.nondeterministic
```

```scala mdoc:invisible:reset

```

```scala mdoc:invisible
import zio._
import zio.test._
```

## Running a Generator

To run a generator, we can call `runCollect` operation:

```scala mdoc:silent:nest
val ints: ZIO[Any, Nothing, List[Int]] = Gen.int.runCollect.debug
// Output: List(-2090696713)
```

This will return a `ZIO` effect containing all its values in a list, which in this example it contains only one element.

To create more samples, we can use `Gen#runCollectN`, which repeatedly runs the generator as much as we need. In this example, it will generate a list of containing 5 integer elements:

```scala mdoc:compile-only
Gen.int.runCollectN(5).debug
// Output: List(281023690, -1852531706, -21674662, 187993034, -868811035)
```

In addition, there is an operator called `Gen#runHead`, which returns the first value generated by the generator.