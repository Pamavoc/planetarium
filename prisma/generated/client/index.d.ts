
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Planet
 * 
 */
export type Planet = $Result.DefaultSelection<Prisma.$PlanetPayload>
/**
 * Model Appearance
 * 
 */
export type Appearance = $Result.DefaultSelection<Prisma.$AppearancePayload>
/**
 * Model Stats
 * 
 */
export type Stats = $Result.DefaultSelection<Prisma.$StatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SurfaceType: {
  ROCK: 'ROCK',
  GAS: 'GAS',
  ICE: 'ICE',
  OCEAN: 'OCEAN',
  LAVA: 'LAVA',
  DESERT: 'DESERT',
  FOREST: 'FOREST',
  JUNGLE: 'JUNGLE',
  SWAMP: 'SWAMP',
  TUNDRA: 'TUNDRA',
  MOUNT: 'MOUNT',
  PLAINS: 'PLAINS',
  CITY: 'CITY',
  SPACE: 'SPACE',
  OTHER: 'OTHER'
};

export type SurfaceType = (typeof SurfaceType)[keyof typeof SurfaceType]

}

export type SurfaceType = $Enums.SurfaceType

export const SurfaceType: typeof $Enums.SurfaceType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Planets
 * const planets = await prisma.planet.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Planets
   * const planets = await prisma.planet.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.planet`: Exposes CRUD operations for the **Planet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planets
    * const planets = await prisma.planet.findMany()
    * ```
    */
  get planet(): Prisma.PlanetDelegate<ExtArgs>;

  /**
   * `prisma.appearance`: Exposes CRUD operations for the **Appearance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appearances
    * const appearances = await prisma.appearance.findMany()
    * ```
    */
  get appearance(): Prisma.AppearanceDelegate<ExtArgs>;

  /**
   * `prisma.stats`: Exposes CRUD operations for the **Stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stats.findMany()
    * ```
    */
  get stats(): Prisma.StatsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Planet: 'Planet',
    Appearance: 'Appearance',
    Stats: 'Stats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "planet" | "appearance" | "stats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Planet: {
        payload: Prisma.$PlanetPayload<ExtArgs>
        fields: Prisma.PlanetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          findFirst: {
            args: Prisma.PlanetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          findMany: {
            args: Prisma.PlanetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>[]
          }
          create: {
            args: Prisma.PlanetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          createMany: {
            args: Prisma.PlanetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>[]
          }
          delete: {
            args: Prisma.PlanetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          update: {
            args: Prisma.PlanetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          deleteMany: {
            args: Prisma.PlanetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          aggregate: {
            args: Prisma.PlanetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanet>
          }
          groupBy: {
            args: Prisma.PlanetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanetCountArgs<ExtArgs>
            result: $Utils.Optional<PlanetCountAggregateOutputType> | number
          }
        }
      }
      Appearance: {
        payload: Prisma.$AppearancePayload<ExtArgs>
        fields: Prisma.AppearanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppearanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppearanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>
          }
          findFirst: {
            args: Prisma.AppearanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppearanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>
          }
          findMany: {
            args: Prisma.AppearanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>[]
          }
          create: {
            args: Prisma.AppearanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>
          }
          createMany: {
            args: Prisma.AppearanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppearanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>[]
          }
          delete: {
            args: Prisma.AppearanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>
          }
          update: {
            args: Prisma.AppearanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>
          }
          deleteMany: {
            args: Prisma.AppearanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppearanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppearanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppearancePayload>
          }
          aggregate: {
            args: Prisma.AppearanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppearance>
          }
          groupBy: {
            args: Prisma.AppearanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppearanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppearanceCountArgs<ExtArgs>
            result: $Utils.Optional<AppearanceCountAggregateOutputType> | number
          }
        }
      }
      Stats: {
        payload: Prisma.$StatsPayload<ExtArgs>
        fields: Prisma.StatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findFirst: {
            args: Prisma.StatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          findMany: {
            args: Prisma.StatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          create: {
            args: Prisma.StatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          createMany: {
            args: Prisma.StatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>[]
          }
          delete: {
            args: Prisma.StatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          update: {
            args: Prisma.StatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          deleteMany: {
            args: Prisma.StatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatsPayload>
          }
          aggregate: {
            args: Prisma.StatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStats>
          }
          groupBy: {
            args: Prisma.StatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatsCountArgs<ExtArgs>
            result: $Utils.Optional<StatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Planet
   */

  export type AggregatePlanet = {
    _count: PlanetCountAggregateOutputType | null
    _min: PlanetMinAggregateOutputType | null
    _max: PlanetMaxAggregateOutputType | null
  }

  export type PlanetMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanetMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanetCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanetMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanetMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanetCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planet to aggregate.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planets
    **/
    _count?: true | PlanetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanetMaxAggregateInputType
  }

  export type GetPlanetAggregateType<T extends PlanetAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanet[P]>
      : GetScalarType<T[P], AggregatePlanet[P]>
  }




  export type PlanetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanetWhereInput
    orderBy?: PlanetOrderByWithAggregationInput | PlanetOrderByWithAggregationInput[]
    by: PlanetScalarFieldEnum[] | PlanetScalarFieldEnum
    having?: PlanetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanetCountAggregateInputType | true
    _min?: PlanetMinAggregateInputType
    _max?: PlanetMaxAggregateInputType
  }

  export type PlanetGroupByOutputType = {
    id: string
    uuid: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlanetCountAggregateOutputType | null
    _min: PlanetMinAggregateOutputType | null
    _max: PlanetMaxAggregateOutputType | null
  }

  type GetPlanetGroupByPayload<T extends PlanetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanetGroupByOutputType[P]>
            : GetScalarType<T[P], PlanetGroupByOutputType[P]>
        }
      >
    >


  export type PlanetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appearance?: boolean | Planet$appearanceArgs<ExtArgs>
    stats?: boolean | Planet$statsArgs<ExtArgs>
  }, ExtArgs["result"]["planet"]>

  export type PlanetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planet"]>

  export type PlanetSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appearance?: boolean | Planet$appearanceArgs<ExtArgs>
    stats?: boolean | Planet$statsArgs<ExtArgs>
  }
  export type PlanetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planet"
    objects: {
      appearance: Prisma.$AppearancePayload<ExtArgs> | null
      stats: Prisma.$StatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planet"]>
    composites: {}
  }

  type PlanetGetPayload<S extends boolean | null | undefined | PlanetDefaultArgs> = $Result.GetResult<Prisma.$PlanetPayload, S>

  type PlanetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanetCountAggregateInputType | true
    }

  export interface PlanetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planet'], meta: { name: 'Planet' } }
    /**
     * Find zero or one Planet that matches the filter.
     * @param {PlanetFindUniqueArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanetFindUniqueArgs>(args: SelectSubset<T, PlanetFindUniqueArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Planet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanetFindUniqueOrThrowArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanetFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Planet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindFirstArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanetFindFirstArgs>(args?: SelectSubset<T, PlanetFindFirstArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Planet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindFirstOrThrowArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanetFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Planets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planets
     * const planets = await prisma.planet.findMany()
     * 
     * // Get first 10 Planets
     * const planets = await prisma.planet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planetWithIdOnly = await prisma.planet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanetFindManyArgs>(args?: SelectSubset<T, PlanetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Planet.
     * @param {PlanetCreateArgs} args - Arguments to create a Planet.
     * @example
     * // Create one Planet
     * const Planet = await prisma.planet.create({
     *   data: {
     *     // ... data to create a Planet
     *   }
     * })
     * 
     */
    create<T extends PlanetCreateArgs>(args: SelectSubset<T, PlanetCreateArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Planets.
     * @param {PlanetCreateManyArgs} args - Arguments to create many Planets.
     * @example
     * // Create many Planets
     * const planet = await prisma.planet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanetCreateManyArgs>(args?: SelectSubset<T, PlanetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Planets and returns the data saved in the database.
     * @param {PlanetCreateManyAndReturnArgs} args - Arguments to create many Planets.
     * @example
     * // Create many Planets
     * const planet = await prisma.planet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Planets and only return the `id`
     * const planetWithIdOnly = await prisma.planet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanetCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Planet.
     * @param {PlanetDeleteArgs} args - Arguments to delete one Planet.
     * @example
     * // Delete one Planet
     * const Planet = await prisma.planet.delete({
     *   where: {
     *     // ... filter to delete one Planet
     *   }
     * })
     * 
     */
    delete<T extends PlanetDeleteArgs>(args: SelectSubset<T, PlanetDeleteArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Planet.
     * @param {PlanetUpdateArgs} args - Arguments to update one Planet.
     * @example
     * // Update one Planet
     * const planet = await prisma.planet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanetUpdateArgs>(args: SelectSubset<T, PlanetUpdateArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Planets.
     * @param {PlanetDeleteManyArgs} args - Arguments to filter Planets to delete.
     * @example
     * // Delete a few Planets
     * const { count } = await prisma.planet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanetDeleteManyArgs>(args?: SelectSubset<T, PlanetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planets
     * const planet = await prisma.planet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanetUpdateManyArgs>(args: SelectSubset<T, PlanetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planet.
     * @param {PlanetUpsertArgs} args - Arguments to update or create a Planet.
     * @example
     * // Update or create a Planet
     * const planet = await prisma.planet.upsert({
     *   create: {
     *     // ... data to create a Planet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planet we want to update
     *   }
     * })
     */
    upsert<T extends PlanetUpsertArgs>(args: SelectSubset<T, PlanetUpsertArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetCountArgs} args - Arguments to filter Planets to count.
     * @example
     * // Count the number of Planets
     * const count = await prisma.planet.count({
     *   where: {
     *     // ... the filter for the Planets we want to count
     *   }
     * })
    **/
    count<T extends PlanetCountArgs>(
      args?: Subset<T, PlanetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanetAggregateArgs>(args: Subset<T, PlanetAggregateArgs>): Prisma.PrismaPromise<GetPlanetAggregateType<T>>

    /**
     * Group by Planet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanetGroupByArgs['orderBy'] }
        : { orderBy?: PlanetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planet model
   */
  readonly fields: PlanetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appearance<T extends Planet$appearanceArgs<ExtArgs> = {}>(args?: Subset<T, Planet$appearanceArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    stats<T extends Planet$statsArgs<ExtArgs> = {}>(args?: Subset<T, Planet$statsArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Planet model
   */ 
  interface PlanetFieldRefs {
    readonly id: FieldRef<"Planet", 'String'>
    readonly uuid: FieldRef<"Planet", 'String'>
    readonly name: FieldRef<"Planet", 'String'>
    readonly description: FieldRef<"Planet", 'String'>
    readonly createdAt: FieldRef<"Planet", 'DateTime'>
    readonly updatedAt: FieldRef<"Planet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Planet findUnique
   */
  export type PlanetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet findUniqueOrThrow
   */
  export type PlanetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet findFirst
   */
  export type PlanetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planets.
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     */
    distinct?: PlanetScalarFieldEnum | PlanetScalarFieldEnum[]
  }

  /**
   * Planet findFirstOrThrow
   */
  export type PlanetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planets.
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     */
    distinct?: PlanetScalarFieldEnum | PlanetScalarFieldEnum[]
  }

  /**
   * Planet findMany
   */
  export type PlanetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planets to fetch.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planets.
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    distinct?: PlanetScalarFieldEnum | PlanetScalarFieldEnum[]
  }

  /**
   * Planet create
   */
  export type PlanetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * The data needed to create a Planet.
     */
    data: XOR<PlanetCreateInput, PlanetUncheckedCreateInput>
  }

  /**
   * Planet createMany
   */
  export type PlanetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planets.
     */
    data: PlanetCreateManyInput | PlanetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planet createManyAndReturn
   */
  export type PlanetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Planets.
     */
    data: PlanetCreateManyInput | PlanetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planet update
   */
  export type PlanetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * The data needed to update a Planet.
     */
    data: XOR<PlanetUpdateInput, PlanetUncheckedUpdateInput>
    /**
     * Choose, which Planet to update.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet updateMany
   */
  export type PlanetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planets.
     */
    data: XOR<PlanetUpdateManyMutationInput, PlanetUncheckedUpdateManyInput>
    /**
     * Filter which Planets to update
     */
    where?: PlanetWhereInput
  }

  /**
   * Planet upsert
   */
  export type PlanetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * The filter to search for the Planet to update in case it exists.
     */
    where: PlanetWhereUniqueInput
    /**
     * In case the Planet found by the `where` argument doesn't exist, create a new Planet with this data.
     */
    create: XOR<PlanetCreateInput, PlanetUncheckedCreateInput>
    /**
     * In case the Planet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanetUpdateInput, PlanetUncheckedUpdateInput>
  }

  /**
   * Planet delete
   */
  export type PlanetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter which Planet to delete.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet deleteMany
   */
  export type PlanetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planets to delete
     */
    where?: PlanetWhereInput
  }

  /**
   * Planet.appearance
   */
  export type Planet$appearanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    where?: AppearanceWhereInput
  }

  /**
   * Planet.stats
   */
  export type Planet$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    where?: StatsWhereInput
  }

  /**
   * Planet without action
   */
  export type PlanetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
  }


  /**
   * Model Appearance
   */

  export type AggregateAppearance = {
    _count: AppearanceCountAggregateOutputType | null
    _avg: AppearanceAvgAggregateOutputType | null
    _sum: AppearanceSumAggregateOutputType | null
    _min: AppearanceMinAggregateOutputType | null
    _max: AppearanceMaxAggregateOutputType | null
  }

  export type AppearanceAvgAggregateOutputType = {
    size: number | null
    brightness: number | null
  }

  export type AppearanceSumAggregateOutputType = {
    size: number | null
    brightness: number | null
  }

  export type AppearanceMinAggregateOutputType = {
    id: string | null
    color: string | null
    texture: string | null
    size: number | null
    brightness: number | null
    surfaceType: $Enums.SurfaceType | null
    planetId: string | null
  }

  export type AppearanceMaxAggregateOutputType = {
    id: string | null
    color: string | null
    texture: string | null
    size: number | null
    brightness: number | null
    surfaceType: $Enums.SurfaceType | null
    planetId: string | null
  }

  export type AppearanceCountAggregateOutputType = {
    id: number
    color: number
    texture: number
    size: number
    brightness: number
    surfaceType: number
    planetId: number
    _all: number
  }


  export type AppearanceAvgAggregateInputType = {
    size?: true
    brightness?: true
  }

  export type AppearanceSumAggregateInputType = {
    size?: true
    brightness?: true
  }

  export type AppearanceMinAggregateInputType = {
    id?: true
    color?: true
    texture?: true
    size?: true
    brightness?: true
    surfaceType?: true
    planetId?: true
  }

  export type AppearanceMaxAggregateInputType = {
    id?: true
    color?: true
    texture?: true
    size?: true
    brightness?: true
    surfaceType?: true
    planetId?: true
  }

  export type AppearanceCountAggregateInputType = {
    id?: true
    color?: true
    texture?: true
    size?: true
    brightness?: true
    surfaceType?: true
    planetId?: true
    _all?: true
  }

  export type AppearanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appearance to aggregate.
     */
    where?: AppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appearances to fetch.
     */
    orderBy?: AppearanceOrderByWithRelationInput | AppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appearances
    **/
    _count?: true | AppearanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppearanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppearanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppearanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppearanceMaxAggregateInputType
  }

  export type GetAppearanceAggregateType<T extends AppearanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAppearance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppearance[P]>
      : GetScalarType<T[P], AggregateAppearance[P]>
  }




  export type AppearanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppearanceWhereInput
    orderBy?: AppearanceOrderByWithAggregationInput | AppearanceOrderByWithAggregationInput[]
    by: AppearanceScalarFieldEnum[] | AppearanceScalarFieldEnum
    having?: AppearanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppearanceCountAggregateInputType | true
    _avg?: AppearanceAvgAggregateInputType
    _sum?: AppearanceSumAggregateInputType
    _min?: AppearanceMinAggregateInputType
    _max?: AppearanceMaxAggregateInputType
  }

  export type AppearanceGroupByOutputType = {
    id: string
    color: string
    texture: string | null
    size: number
    brightness: number
    surfaceType: $Enums.SurfaceType
    planetId: string
    _count: AppearanceCountAggregateOutputType | null
    _avg: AppearanceAvgAggregateOutputType | null
    _sum: AppearanceSumAggregateOutputType | null
    _min: AppearanceMinAggregateOutputType | null
    _max: AppearanceMaxAggregateOutputType | null
  }

  type GetAppearanceGroupByPayload<T extends AppearanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppearanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppearanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppearanceGroupByOutputType[P]>
            : GetScalarType<T[P], AppearanceGroupByOutputType[P]>
        }
      >
    >


  export type AppearanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    texture?: boolean
    size?: boolean
    brightness?: boolean
    surfaceType?: boolean
    planetId?: boolean
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appearance"]>

  export type AppearanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
    texture?: boolean
    size?: boolean
    brightness?: boolean
    surfaceType?: boolean
    planetId?: boolean
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appearance"]>

  export type AppearanceSelectScalar = {
    id?: boolean
    color?: boolean
    texture?: boolean
    size?: boolean
    brightness?: boolean
    surfaceType?: boolean
    planetId?: boolean
  }

  export type AppearanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }
  export type AppearanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }

  export type $AppearancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appearance"
    objects: {
      planet: Prisma.$PlanetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      color: string
      texture: string | null
      size: number
      brightness: number
      surfaceType: $Enums.SurfaceType
      planetId: string
    }, ExtArgs["result"]["appearance"]>
    composites: {}
  }

  type AppearanceGetPayload<S extends boolean | null | undefined | AppearanceDefaultArgs> = $Result.GetResult<Prisma.$AppearancePayload, S>

  type AppearanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppearanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppearanceCountAggregateInputType | true
    }

  export interface AppearanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appearance'], meta: { name: 'Appearance' } }
    /**
     * Find zero or one Appearance that matches the filter.
     * @param {AppearanceFindUniqueArgs} args - Arguments to find a Appearance
     * @example
     * // Get one Appearance
     * const appearance = await prisma.appearance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppearanceFindUniqueArgs>(args: SelectSubset<T, AppearanceFindUniqueArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Appearance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppearanceFindUniqueOrThrowArgs} args - Arguments to find a Appearance
     * @example
     * // Get one Appearance
     * const appearance = await prisma.appearance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppearanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AppearanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Appearance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppearanceFindFirstArgs} args - Arguments to find a Appearance
     * @example
     * // Get one Appearance
     * const appearance = await prisma.appearance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppearanceFindFirstArgs>(args?: SelectSubset<T, AppearanceFindFirstArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Appearance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppearanceFindFirstOrThrowArgs} args - Arguments to find a Appearance
     * @example
     * // Get one Appearance
     * const appearance = await prisma.appearance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppearanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AppearanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Appearances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppearanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appearances
     * const appearances = await prisma.appearance.findMany()
     * 
     * // Get first 10 Appearances
     * const appearances = await prisma.appearance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appearanceWithIdOnly = await prisma.appearance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppearanceFindManyArgs>(args?: SelectSubset<T, AppearanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Appearance.
     * @param {AppearanceCreateArgs} args - Arguments to create a Appearance.
     * @example
     * // Create one Appearance
     * const Appearance = await prisma.appearance.create({
     *   data: {
     *     // ... data to create a Appearance
     *   }
     * })
     * 
     */
    create<T extends AppearanceCreateArgs>(args: SelectSubset<T, AppearanceCreateArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Appearances.
     * @param {AppearanceCreateManyArgs} args - Arguments to create many Appearances.
     * @example
     * // Create many Appearances
     * const appearance = await prisma.appearance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppearanceCreateManyArgs>(args?: SelectSubset<T, AppearanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appearances and returns the data saved in the database.
     * @param {AppearanceCreateManyAndReturnArgs} args - Arguments to create many Appearances.
     * @example
     * // Create many Appearances
     * const appearance = await prisma.appearance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appearances and only return the `id`
     * const appearanceWithIdOnly = await prisma.appearance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppearanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AppearanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Appearance.
     * @param {AppearanceDeleteArgs} args - Arguments to delete one Appearance.
     * @example
     * // Delete one Appearance
     * const Appearance = await prisma.appearance.delete({
     *   where: {
     *     // ... filter to delete one Appearance
     *   }
     * })
     * 
     */
    delete<T extends AppearanceDeleteArgs>(args: SelectSubset<T, AppearanceDeleteArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Appearance.
     * @param {AppearanceUpdateArgs} args - Arguments to update one Appearance.
     * @example
     * // Update one Appearance
     * const appearance = await prisma.appearance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppearanceUpdateArgs>(args: SelectSubset<T, AppearanceUpdateArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Appearances.
     * @param {AppearanceDeleteManyArgs} args - Arguments to filter Appearances to delete.
     * @example
     * // Delete a few Appearances
     * const { count } = await prisma.appearance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppearanceDeleteManyArgs>(args?: SelectSubset<T, AppearanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appearances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppearanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appearances
     * const appearance = await prisma.appearance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppearanceUpdateManyArgs>(args: SelectSubset<T, AppearanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appearance.
     * @param {AppearanceUpsertArgs} args - Arguments to update or create a Appearance.
     * @example
     * // Update or create a Appearance
     * const appearance = await prisma.appearance.upsert({
     *   create: {
     *     // ... data to create a Appearance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appearance we want to update
     *   }
     * })
     */
    upsert<T extends AppearanceUpsertArgs>(args: SelectSubset<T, AppearanceUpsertArgs<ExtArgs>>): Prisma__AppearanceClient<$Result.GetResult<Prisma.$AppearancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Appearances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppearanceCountArgs} args - Arguments to filter Appearances to count.
     * @example
     * // Count the number of Appearances
     * const count = await prisma.appearance.count({
     *   where: {
     *     // ... the filter for the Appearances we want to count
     *   }
     * })
    **/
    count<T extends AppearanceCountArgs>(
      args?: Subset<T, AppearanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppearanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appearance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppearanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppearanceAggregateArgs>(args: Subset<T, AppearanceAggregateArgs>): Prisma.PrismaPromise<GetAppearanceAggregateType<T>>

    /**
     * Group by Appearance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppearanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppearanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppearanceGroupByArgs['orderBy'] }
        : { orderBy?: AppearanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppearanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppearanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appearance model
   */
  readonly fields: AppearanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appearance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppearanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planet<T extends PlanetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanetDefaultArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appearance model
   */ 
  interface AppearanceFieldRefs {
    readonly id: FieldRef<"Appearance", 'String'>
    readonly color: FieldRef<"Appearance", 'String'>
    readonly texture: FieldRef<"Appearance", 'String'>
    readonly size: FieldRef<"Appearance", 'Float'>
    readonly brightness: FieldRef<"Appearance", 'Float'>
    readonly surfaceType: FieldRef<"Appearance", 'SurfaceType'>
    readonly planetId: FieldRef<"Appearance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appearance findUnique
   */
  export type AppearanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * Filter, which Appearance to fetch.
     */
    where: AppearanceWhereUniqueInput
  }

  /**
   * Appearance findUniqueOrThrow
   */
  export type AppearanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * Filter, which Appearance to fetch.
     */
    where: AppearanceWhereUniqueInput
  }

  /**
   * Appearance findFirst
   */
  export type AppearanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * Filter, which Appearance to fetch.
     */
    where?: AppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appearances to fetch.
     */
    orderBy?: AppearanceOrderByWithRelationInput | AppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appearances.
     */
    cursor?: AppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appearances.
     */
    distinct?: AppearanceScalarFieldEnum | AppearanceScalarFieldEnum[]
  }

  /**
   * Appearance findFirstOrThrow
   */
  export type AppearanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * Filter, which Appearance to fetch.
     */
    where?: AppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appearances to fetch.
     */
    orderBy?: AppearanceOrderByWithRelationInput | AppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appearances.
     */
    cursor?: AppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appearances.
     */
    distinct?: AppearanceScalarFieldEnum | AppearanceScalarFieldEnum[]
  }

  /**
   * Appearance findMany
   */
  export type AppearanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * Filter, which Appearances to fetch.
     */
    where?: AppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appearances to fetch.
     */
    orderBy?: AppearanceOrderByWithRelationInput | AppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appearances.
     */
    cursor?: AppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appearances.
     */
    skip?: number
    distinct?: AppearanceScalarFieldEnum | AppearanceScalarFieldEnum[]
  }

  /**
   * Appearance create
   */
  export type AppearanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Appearance.
     */
    data: XOR<AppearanceCreateInput, AppearanceUncheckedCreateInput>
  }

  /**
   * Appearance createMany
   */
  export type AppearanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appearances.
     */
    data: AppearanceCreateManyInput | AppearanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appearance createManyAndReturn
   */
  export type AppearanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Appearances.
     */
    data: AppearanceCreateManyInput | AppearanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appearance update
   */
  export type AppearanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Appearance.
     */
    data: XOR<AppearanceUpdateInput, AppearanceUncheckedUpdateInput>
    /**
     * Choose, which Appearance to update.
     */
    where: AppearanceWhereUniqueInput
  }

  /**
   * Appearance updateMany
   */
  export type AppearanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appearances.
     */
    data: XOR<AppearanceUpdateManyMutationInput, AppearanceUncheckedUpdateManyInput>
    /**
     * Filter which Appearances to update
     */
    where?: AppearanceWhereInput
  }

  /**
   * Appearance upsert
   */
  export type AppearanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Appearance to update in case it exists.
     */
    where: AppearanceWhereUniqueInput
    /**
     * In case the Appearance found by the `where` argument doesn't exist, create a new Appearance with this data.
     */
    create: XOR<AppearanceCreateInput, AppearanceUncheckedCreateInput>
    /**
     * In case the Appearance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppearanceUpdateInput, AppearanceUncheckedUpdateInput>
  }

  /**
   * Appearance delete
   */
  export type AppearanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
    /**
     * Filter which Appearance to delete.
     */
    where: AppearanceWhereUniqueInput
  }

  /**
   * Appearance deleteMany
   */
  export type AppearanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appearances to delete
     */
    where?: AppearanceWhereInput
  }

  /**
   * Appearance without action
   */
  export type AppearanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appearance
     */
    select?: AppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppearanceInclude<ExtArgs> | null
  }


  /**
   * Model Stats
   */

  export type AggregateStats = {
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  export type StatsAvgAggregateOutputType = {
    water: number | null
    vegetation: number | null
    atmosphere: number | null
    temperature: number | null
    gravity: number | null
  }

  export type StatsSumAggregateOutputType = {
    water: number | null
    vegetation: number | null
    atmosphere: number | null
    temperature: number | null
    gravity: number | null
  }

  export type StatsMinAggregateOutputType = {
    id: string | null
    water: number | null
    vegetation: number | null
    atmosphere: number | null
    temperature: number | null
    gravity: number | null
    planetId: string | null
  }

  export type StatsMaxAggregateOutputType = {
    id: string | null
    water: number | null
    vegetation: number | null
    atmosphere: number | null
    temperature: number | null
    gravity: number | null
    planetId: string | null
  }

  export type StatsCountAggregateOutputType = {
    id: number
    water: number
    vegetation: number
    atmosphere: number
    temperature: number
    gravity: number
    planetId: number
    _all: number
  }


  export type StatsAvgAggregateInputType = {
    water?: true
    vegetation?: true
    atmosphere?: true
    temperature?: true
    gravity?: true
  }

  export type StatsSumAggregateInputType = {
    water?: true
    vegetation?: true
    atmosphere?: true
    temperature?: true
    gravity?: true
  }

  export type StatsMinAggregateInputType = {
    id?: true
    water?: true
    vegetation?: true
    atmosphere?: true
    temperature?: true
    gravity?: true
    planetId?: true
  }

  export type StatsMaxAggregateInputType = {
    id?: true
    water?: true
    vegetation?: true
    atmosphere?: true
    temperature?: true
    gravity?: true
    planetId?: true
  }

  export type StatsCountAggregateInputType = {
    id?: true
    water?: true
    vegetation?: true
    atmosphere?: true
    temperature?: true
    gravity?: true
    planetId?: true
    _all?: true
  }

  export type StatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to aggregate.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatsMaxAggregateInputType
  }

  export type GetStatsAggregateType<T extends StatsAggregateArgs> = {
        [P in keyof T & keyof AggregateStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats[P]>
      : GetScalarType<T[P], AggregateStats[P]>
  }




  export type StatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatsWhereInput
    orderBy?: StatsOrderByWithAggregationInput | StatsOrderByWithAggregationInput[]
    by: StatsScalarFieldEnum[] | StatsScalarFieldEnum
    having?: StatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatsCountAggregateInputType | true
    _avg?: StatsAvgAggregateInputType
    _sum?: StatsSumAggregateInputType
    _min?: StatsMinAggregateInputType
    _max?: StatsMaxAggregateInputType
  }

  export type StatsGroupByOutputType = {
    id: string
    water: number
    vegetation: number
    atmosphere: number
    temperature: number
    gravity: number
    planetId: string
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  type GetStatsGroupByPayload<T extends StatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsGroupByOutputType[P]>
            : GetScalarType<T[P], StatsGroupByOutputType[P]>
        }
      >
    >


  export type StatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    water?: boolean
    vegetation?: boolean
    atmosphere?: boolean
    temperature?: boolean
    gravity?: boolean
    planetId?: boolean
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    water?: boolean
    vegetation?: boolean
    atmosphere?: boolean
    temperature?: boolean
    gravity?: boolean
    planetId?: boolean
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stats"]>

  export type StatsSelectScalar = {
    id?: boolean
    water?: boolean
    vegetation?: boolean
    atmosphere?: boolean
    temperature?: boolean
    gravity?: boolean
    planetId?: boolean
  }

  export type StatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }
  export type StatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }

  export type $StatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stats"
    objects: {
      planet: Prisma.$PlanetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      water: number
      vegetation: number
      atmosphere: number
      temperature: number
      gravity: number
      planetId: string
    }, ExtArgs["result"]["stats"]>
    composites: {}
  }

  type StatsGetPayload<S extends boolean | null | undefined | StatsDefaultArgs> = $Result.GetResult<Prisma.$StatsPayload, S>

  type StatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatsCountAggregateInputType | true
    }

  export interface StatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stats'], meta: { name: 'Stats' } }
    /**
     * Find zero or one Stats that matches the filter.
     * @param {StatsFindUniqueArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatsFindUniqueArgs>(args: SelectSubset<T, StatsFindUniqueArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stats that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatsFindUniqueOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatsFindUniqueOrThrowArgs>(args: SelectSubset<T, StatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatsFindFirstArgs>(args?: SelectSubset<T, StatsFindFirstArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatsFindFirstOrThrowArgs>(args?: SelectSubset<T, StatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stats.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statsWithIdOnly = await prisma.stats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatsFindManyArgs>(args?: SelectSubset<T, StatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stats.
     * @param {StatsCreateArgs} args - Arguments to create a Stats.
     * @example
     * // Create one Stats
     * const Stats = await prisma.stats.create({
     *   data: {
     *     // ... data to create a Stats
     *   }
     * })
     * 
     */
    create<T extends StatsCreateArgs>(args: SelectSubset<T, StatsCreateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stats.
     * @param {StatsCreateManyArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatsCreateManyArgs>(args?: SelectSubset<T, StatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stats and returns the data saved in the database.
     * @param {StatsCreateManyAndReturnArgs} args - Arguments to create many Stats.
     * @example
     * // Create many Stats
     * const stats = await prisma.stats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stats and only return the `id`
     * const statsWithIdOnly = await prisma.stats.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatsCreateManyAndReturnArgs>(args?: SelectSubset<T, StatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stats.
     * @param {StatsDeleteArgs} args - Arguments to delete one Stats.
     * @example
     * // Delete one Stats
     * const Stats = await prisma.stats.delete({
     *   where: {
     *     // ... filter to delete one Stats
     *   }
     * })
     * 
     */
    delete<T extends StatsDeleteArgs>(args: SelectSubset<T, StatsDeleteArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stats.
     * @param {StatsUpdateArgs} args - Arguments to update one Stats.
     * @example
     * // Update one Stats
     * const stats = await prisma.stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatsUpdateArgs>(args: SelectSubset<T, StatsUpdateArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stats.
     * @param {StatsDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatsDeleteManyArgs>(args?: SelectSubset<T, StatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatsUpdateManyArgs>(args: SelectSubset<T, StatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stats.
     * @param {StatsUpsertArgs} args - Arguments to update or create a Stats.
     * @example
     * // Update or create a Stats
     * const stats = await prisma.stats.upsert({
     *   create: {
     *     // ... data to create a Stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats we want to update
     *   }
     * })
     */
    upsert<T extends StatsUpsertArgs>(args: SelectSubset<T, StatsUpsertArgs<ExtArgs>>): Prisma__StatsClient<$Result.GetResult<Prisma.$StatsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stats.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatsCountArgs>(
      args?: Subset<T, StatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatsAggregateArgs>(args: Subset<T, StatsAggregateArgs>): Prisma.PrismaPromise<GetStatsAggregateType<T>>

    /**
     * Group by Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatsGroupByArgs['orderBy'] }
        : { orderBy?: StatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stats model
   */
  readonly fields: StatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planet<T extends PlanetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanetDefaultArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stats model
   */ 
  interface StatsFieldRefs {
    readonly id: FieldRef<"Stats", 'String'>
    readonly water: FieldRef<"Stats", 'Float'>
    readonly vegetation: FieldRef<"Stats", 'Float'>
    readonly atmosphere: FieldRef<"Stats", 'Float'>
    readonly temperature: FieldRef<"Stats", 'Float'>
    readonly gravity: FieldRef<"Stats", 'Float'>
    readonly planetId: FieldRef<"Stats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stats findUnique
   */
  export type StatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findUniqueOrThrow
   */
  export type StatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats findFirst
   */
  export type StatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findFirstOrThrow
   */
  export type StatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     */
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats findMany
   */
  export type StatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter, which Stats to fetch.
     */
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     */
    orderBy?: StatsOrderByWithRelationInput | StatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     */
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     */
    skip?: number
    distinct?: StatsScalarFieldEnum | StatsScalarFieldEnum[]
  }

  /**
   * Stats create
   */
  export type StatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to create a Stats.
     */
    data: XOR<StatsCreateInput, StatsUncheckedCreateInput>
  }

  /**
   * Stats createMany
   */
  export type StatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stats createManyAndReturn
   */
  export type StatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stats.
     */
    data: StatsCreateManyInput | StatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stats update
   */
  export type StatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The data needed to update a Stats.
     */
    data: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
    /**
     * Choose, which Stats to update.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats updateMany
   */
  export type StatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stats.
     */
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     */
    where?: StatsWhereInput
  }

  /**
   * Stats upsert
   */
  export type StatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * The filter to search for the Stats to update in case it exists.
     */
    where: StatsWhereUniqueInput
    /**
     * In case the Stats found by the `where` argument doesn't exist, create a new Stats with this data.
     */
    create: XOR<StatsCreateInput, StatsUncheckedCreateInput>
    /**
     * In case the Stats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
  }

  /**
   * Stats delete
   */
  export type StatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
    /**
     * Filter which Stats to delete.
     */
    where: StatsWhereUniqueInput
  }

  /**
   * Stats deleteMany
   */
  export type StatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stats to delete
     */
    where?: StatsWhereInput
  }

  /**
   * Stats without action
   */
  export type StatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stats
     */
    select?: StatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlanetScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanetScalarFieldEnum = (typeof PlanetScalarFieldEnum)[keyof typeof PlanetScalarFieldEnum]


  export const AppearanceScalarFieldEnum: {
    id: 'id',
    color: 'color',
    texture: 'texture',
    size: 'size',
    brightness: 'brightness',
    surfaceType: 'surfaceType',
    planetId: 'planetId'
  };

  export type AppearanceScalarFieldEnum = (typeof AppearanceScalarFieldEnum)[keyof typeof AppearanceScalarFieldEnum]


  export const StatsScalarFieldEnum: {
    id: 'id',
    water: 'water',
    vegetation: 'vegetation',
    atmosphere: 'atmosphere',
    temperature: 'temperature',
    gravity: 'gravity',
    planetId: 'planetId'
  };

  export type StatsScalarFieldEnum = (typeof StatsScalarFieldEnum)[keyof typeof StatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SurfaceType'
   */
  export type EnumSurfaceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurfaceType'>
    


  /**
   * Reference to a field of type 'SurfaceType[]'
   */
  export type ListEnumSurfaceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurfaceType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PlanetWhereInput = {
    AND?: PlanetWhereInput | PlanetWhereInput[]
    OR?: PlanetWhereInput[]
    NOT?: PlanetWhereInput | PlanetWhereInput[]
    id?: StringFilter<"Planet"> | string
    uuid?: StringFilter<"Planet"> | string
    name?: StringFilter<"Planet"> | string
    description?: StringNullableFilter<"Planet"> | string | null
    createdAt?: DateTimeFilter<"Planet"> | Date | string
    updatedAt?: DateTimeFilter<"Planet"> | Date | string
    appearance?: XOR<AppearanceNullableRelationFilter, AppearanceWhereInput> | null
    stats?: XOR<StatsNullableRelationFilter, StatsWhereInput> | null
  }

  export type PlanetOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appearance?: AppearanceOrderByWithRelationInput
    stats?: StatsOrderByWithRelationInput
  }

  export type PlanetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: PlanetWhereInput | PlanetWhereInput[]
    OR?: PlanetWhereInput[]
    NOT?: PlanetWhereInput | PlanetWhereInput[]
    name?: StringFilter<"Planet"> | string
    description?: StringNullableFilter<"Planet"> | string | null
    createdAt?: DateTimeFilter<"Planet"> | Date | string
    updatedAt?: DateTimeFilter<"Planet"> | Date | string
    appearance?: XOR<AppearanceNullableRelationFilter, AppearanceWhereInput> | null
    stats?: XOR<StatsNullableRelationFilter, StatsWhereInput> | null
  }, "id" | "uuid">

  export type PlanetOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanetCountOrderByAggregateInput
    _max?: PlanetMaxOrderByAggregateInput
    _min?: PlanetMinOrderByAggregateInput
  }

  export type PlanetScalarWhereWithAggregatesInput = {
    AND?: PlanetScalarWhereWithAggregatesInput | PlanetScalarWhereWithAggregatesInput[]
    OR?: PlanetScalarWhereWithAggregatesInput[]
    NOT?: PlanetScalarWhereWithAggregatesInput | PlanetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Planet"> | string
    uuid?: StringWithAggregatesFilter<"Planet"> | string
    name?: StringWithAggregatesFilter<"Planet"> | string
    description?: StringNullableWithAggregatesFilter<"Planet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Planet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Planet"> | Date | string
  }

  export type AppearanceWhereInput = {
    AND?: AppearanceWhereInput | AppearanceWhereInput[]
    OR?: AppearanceWhereInput[]
    NOT?: AppearanceWhereInput | AppearanceWhereInput[]
    id?: StringFilter<"Appearance"> | string
    color?: StringFilter<"Appearance"> | string
    texture?: StringNullableFilter<"Appearance"> | string | null
    size?: FloatFilter<"Appearance"> | number
    brightness?: FloatFilter<"Appearance"> | number
    surfaceType?: EnumSurfaceTypeFilter<"Appearance"> | $Enums.SurfaceType
    planetId?: StringFilter<"Appearance"> | string
    planet?: XOR<PlanetRelationFilter, PlanetWhereInput>
  }

  export type AppearanceOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
    texture?: SortOrderInput | SortOrder
    size?: SortOrder
    brightness?: SortOrder
    surfaceType?: SortOrder
    planetId?: SortOrder
    planet?: PlanetOrderByWithRelationInput
  }

  export type AppearanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planetId?: string
    AND?: AppearanceWhereInput | AppearanceWhereInput[]
    OR?: AppearanceWhereInput[]
    NOT?: AppearanceWhereInput | AppearanceWhereInput[]
    color?: StringFilter<"Appearance"> | string
    texture?: StringNullableFilter<"Appearance"> | string | null
    size?: FloatFilter<"Appearance"> | number
    brightness?: FloatFilter<"Appearance"> | number
    surfaceType?: EnumSurfaceTypeFilter<"Appearance"> | $Enums.SurfaceType
    planet?: XOR<PlanetRelationFilter, PlanetWhereInput>
  }, "id" | "planetId">

  export type AppearanceOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    texture?: SortOrderInput | SortOrder
    size?: SortOrder
    brightness?: SortOrder
    surfaceType?: SortOrder
    planetId?: SortOrder
    _count?: AppearanceCountOrderByAggregateInput
    _avg?: AppearanceAvgOrderByAggregateInput
    _max?: AppearanceMaxOrderByAggregateInput
    _min?: AppearanceMinOrderByAggregateInput
    _sum?: AppearanceSumOrderByAggregateInput
  }

  export type AppearanceScalarWhereWithAggregatesInput = {
    AND?: AppearanceScalarWhereWithAggregatesInput | AppearanceScalarWhereWithAggregatesInput[]
    OR?: AppearanceScalarWhereWithAggregatesInput[]
    NOT?: AppearanceScalarWhereWithAggregatesInput | AppearanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appearance"> | string
    color?: StringWithAggregatesFilter<"Appearance"> | string
    texture?: StringNullableWithAggregatesFilter<"Appearance"> | string | null
    size?: FloatWithAggregatesFilter<"Appearance"> | number
    brightness?: FloatWithAggregatesFilter<"Appearance"> | number
    surfaceType?: EnumSurfaceTypeWithAggregatesFilter<"Appearance"> | $Enums.SurfaceType
    planetId?: StringWithAggregatesFilter<"Appearance"> | string
  }

  export type StatsWhereInput = {
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    id?: StringFilter<"Stats"> | string
    water?: FloatFilter<"Stats"> | number
    vegetation?: FloatFilter<"Stats"> | number
    atmosphere?: FloatFilter<"Stats"> | number
    temperature?: FloatFilter<"Stats"> | number
    gravity?: FloatFilter<"Stats"> | number
    planetId?: StringFilter<"Stats"> | string
    planet?: XOR<PlanetRelationFilter, PlanetWhereInput>
  }

  export type StatsOrderByWithRelationInput = {
    id?: SortOrder
    water?: SortOrder
    vegetation?: SortOrder
    atmosphere?: SortOrder
    temperature?: SortOrder
    gravity?: SortOrder
    planetId?: SortOrder
    planet?: PlanetOrderByWithRelationInput
  }

  export type StatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planetId?: string
    AND?: StatsWhereInput | StatsWhereInput[]
    OR?: StatsWhereInput[]
    NOT?: StatsWhereInput | StatsWhereInput[]
    water?: FloatFilter<"Stats"> | number
    vegetation?: FloatFilter<"Stats"> | number
    atmosphere?: FloatFilter<"Stats"> | number
    temperature?: FloatFilter<"Stats"> | number
    gravity?: FloatFilter<"Stats"> | number
    planet?: XOR<PlanetRelationFilter, PlanetWhereInput>
  }, "id" | "planetId">

  export type StatsOrderByWithAggregationInput = {
    id?: SortOrder
    water?: SortOrder
    vegetation?: SortOrder
    atmosphere?: SortOrder
    temperature?: SortOrder
    gravity?: SortOrder
    planetId?: SortOrder
    _count?: StatsCountOrderByAggregateInput
    _avg?: StatsAvgOrderByAggregateInput
    _max?: StatsMaxOrderByAggregateInput
    _min?: StatsMinOrderByAggregateInput
    _sum?: StatsSumOrderByAggregateInput
  }

  export type StatsScalarWhereWithAggregatesInput = {
    AND?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    OR?: StatsScalarWhereWithAggregatesInput[]
    NOT?: StatsScalarWhereWithAggregatesInput | StatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stats"> | string
    water?: FloatWithAggregatesFilter<"Stats"> | number
    vegetation?: FloatWithAggregatesFilter<"Stats"> | number
    atmosphere?: FloatWithAggregatesFilter<"Stats"> | number
    temperature?: FloatWithAggregatesFilter<"Stats"> | number
    gravity?: FloatWithAggregatesFilter<"Stats"> | number
    planetId?: StringWithAggregatesFilter<"Stats"> | string
  }

  export type PlanetCreateInput = {
    id?: string
    uuid?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appearance?: AppearanceCreateNestedOneWithoutPlanetInput
    stats?: StatsCreateNestedOneWithoutPlanetInput
  }

  export type PlanetUncheckedCreateInput = {
    id?: string
    uuid?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appearance?: AppearanceUncheckedCreateNestedOneWithoutPlanetInput
    stats?: StatsUncheckedCreateNestedOneWithoutPlanetInput
  }

  export type PlanetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appearance?: AppearanceUpdateOneWithoutPlanetNestedInput
    stats?: StatsUpdateOneWithoutPlanetNestedInput
  }

  export type PlanetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appearance?: AppearanceUncheckedUpdateOneWithoutPlanetNestedInput
    stats?: StatsUncheckedUpdateOneWithoutPlanetNestedInput
  }

  export type PlanetCreateManyInput = {
    id?: string
    uuid?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppearanceCreateInput = {
    id?: string
    color: string
    texture?: string | null
    size: number
    brightness: number
    surfaceType: $Enums.SurfaceType
    planet: PlanetCreateNestedOneWithoutAppearanceInput
  }

  export type AppearanceUncheckedCreateInput = {
    id?: string
    color: string
    texture?: string | null
    size: number
    brightness: number
    surfaceType: $Enums.SurfaceType
    planetId: string
  }

  export type AppearanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    texture?: NullableStringFieldUpdateOperationsInput | string | null
    size?: FloatFieldUpdateOperationsInput | number
    brightness?: FloatFieldUpdateOperationsInput | number
    surfaceType?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    planet?: PlanetUpdateOneRequiredWithoutAppearanceNestedInput
  }

  export type AppearanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    texture?: NullableStringFieldUpdateOperationsInput | string | null
    size?: FloatFieldUpdateOperationsInput | number
    brightness?: FloatFieldUpdateOperationsInput | number
    surfaceType?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    planetId?: StringFieldUpdateOperationsInput | string
  }

  export type AppearanceCreateManyInput = {
    id?: string
    color: string
    texture?: string | null
    size: number
    brightness: number
    surfaceType: $Enums.SurfaceType
    planetId: string
  }

  export type AppearanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    texture?: NullableStringFieldUpdateOperationsInput | string | null
    size?: FloatFieldUpdateOperationsInput | number
    brightness?: FloatFieldUpdateOperationsInput | number
    surfaceType?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
  }

  export type AppearanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    texture?: NullableStringFieldUpdateOperationsInput | string | null
    size?: FloatFieldUpdateOperationsInput | number
    brightness?: FloatFieldUpdateOperationsInput | number
    surfaceType?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
    planetId?: StringFieldUpdateOperationsInput | string
  }

  export type StatsCreateInput = {
    id?: string
    water: number
    vegetation: number
    atmosphere: number
    temperature: number
    gravity: number
    planet: PlanetCreateNestedOneWithoutStatsInput
  }

  export type StatsUncheckedCreateInput = {
    id?: string
    water: number
    vegetation: number
    atmosphere: number
    temperature: number
    gravity: number
    planetId: string
  }

  export type StatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    vegetation?: FloatFieldUpdateOperationsInput | number
    atmosphere?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    gravity?: FloatFieldUpdateOperationsInput | number
    planet?: PlanetUpdateOneRequiredWithoutStatsNestedInput
  }

  export type StatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    vegetation?: FloatFieldUpdateOperationsInput | number
    atmosphere?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    gravity?: FloatFieldUpdateOperationsInput | number
    planetId?: StringFieldUpdateOperationsInput | string
  }

  export type StatsCreateManyInput = {
    id?: string
    water: number
    vegetation: number
    atmosphere: number
    temperature: number
    gravity: number
    planetId: string
  }

  export type StatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    vegetation?: FloatFieldUpdateOperationsInput | number
    atmosphere?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    gravity?: FloatFieldUpdateOperationsInput | number
  }

  export type StatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    vegetation?: FloatFieldUpdateOperationsInput | number
    atmosphere?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    gravity?: FloatFieldUpdateOperationsInput | number
    planetId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppearanceNullableRelationFilter = {
    is?: AppearanceWhereInput | null
    isNot?: AppearanceWhereInput | null
  }

  export type StatsNullableRelationFilter = {
    is?: StatsWhereInput | null
    isNot?: StatsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlanetCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumSurfaceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeFilter<$PrismaModel> | $Enums.SurfaceType
  }

  export type PlanetRelationFilter = {
    is?: PlanetWhereInput
    isNot?: PlanetWhereInput
  }

  export type AppearanceCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    texture?: SortOrder
    size?: SortOrder
    brightness?: SortOrder
    surfaceType?: SortOrder
    planetId?: SortOrder
  }

  export type AppearanceAvgOrderByAggregateInput = {
    size?: SortOrder
    brightness?: SortOrder
  }

  export type AppearanceMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    texture?: SortOrder
    size?: SortOrder
    brightness?: SortOrder
    surfaceType?: SortOrder
    planetId?: SortOrder
  }

  export type AppearanceMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
    texture?: SortOrder
    size?: SortOrder
    brightness?: SortOrder
    surfaceType?: SortOrder
    planetId?: SortOrder
  }

  export type AppearanceSumOrderByAggregateInput = {
    size?: SortOrder
    brightness?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSurfaceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SurfaceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurfaceTypeFilter<$PrismaModel>
    _max?: NestedEnumSurfaceTypeFilter<$PrismaModel>
  }

  export type StatsCountOrderByAggregateInput = {
    id?: SortOrder
    water?: SortOrder
    vegetation?: SortOrder
    atmosphere?: SortOrder
    temperature?: SortOrder
    gravity?: SortOrder
    planetId?: SortOrder
  }

  export type StatsAvgOrderByAggregateInput = {
    water?: SortOrder
    vegetation?: SortOrder
    atmosphere?: SortOrder
    temperature?: SortOrder
    gravity?: SortOrder
  }

  export type StatsMaxOrderByAggregateInput = {
    id?: SortOrder
    water?: SortOrder
    vegetation?: SortOrder
    atmosphere?: SortOrder
    temperature?: SortOrder
    gravity?: SortOrder
    planetId?: SortOrder
  }

  export type StatsMinOrderByAggregateInput = {
    id?: SortOrder
    water?: SortOrder
    vegetation?: SortOrder
    atmosphere?: SortOrder
    temperature?: SortOrder
    gravity?: SortOrder
    planetId?: SortOrder
  }

  export type StatsSumOrderByAggregateInput = {
    water?: SortOrder
    vegetation?: SortOrder
    atmosphere?: SortOrder
    temperature?: SortOrder
    gravity?: SortOrder
  }

  export type AppearanceCreateNestedOneWithoutPlanetInput = {
    create?: XOR<AppearanceCreateWithoutPlanetInput, AppearanceUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: AppearanceCreateOrConnectWithoutPlanetInput
    connect?: AppearanceWhereUniqueInput
  }

  export type StatsCreateNestedOneWithoutPlanetInput = {
    create?: XOR<StatsCreateWithoutPlanetInput, StatsUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: StatsCreateOrConnectWithoutPlanetInput
    connect?: StatsWhereUniqueInput
  }

  export type AppearanceUncheckedCreateNestedOneWithoutPlanetInput = {
    create?: XOR<AppearanceCreateWithoutPlanetInput, AppearanceUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: AppearanceCreateOrConnectWithoutPlanetInput
    connect?: AppearanceWhereUniqueInput
  }

  export type StatsUncheckedCreateNestedOneWithoutPlanetInput = {
    create?: XOR<StatsCreateWithoutPlanetInput, StatsUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: StatsCreateOrConnectWithoutPlanetInput
    connect?: StatsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppearanceUpdateOneWithoutPlanetNestedInput = {
    create?: XOR<AppearanceCreateWithoutPlanetInput, AppearanceUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: AppearanceCreateOrConnectWithoutPlanetInput
    upsert?: AppearanceUpsertWithoutPlanetInput
    disconnect?: AppearanceWhereInput | boolean
    delete?: AppearanceWhereInput | boolean
    connect?: AppearanceWhereUniqueInput
    update?: XOR<XOR<AppearanceUpdateToOneWithWhereWithoutPlanetInput, AppearanceUpdateWithoutPlanetInput>, AppearanceUncheckedUpdateWithoutPlanetInput>
  }

  export type StatsUpdateOneWithoutPlanetNestedInput = {
    create?: XOR<StatsCreateWithoutPlanetInput, StatsUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: StatsCreateOrConnectWithoutPlanetInput
    upsert?: StatsUpsertWithoutPlanetInput
    disconnect?: StatsWhereInput | boolean
    delete?: StatsWhereInput | boolean
    connect?: StatsWhereUniqueInput
    update?: XOR<XOR<StatsUpdateToOneWithWhereWithoutPlanetInput, StatsUpdateWithoutPlanetInput>, StatsUncheckedUpdateWithoutPlanetInput>
  }

  export type AppearanceUncheckedUpdateOneWithoutPlanetNestedInput = {
    create?: XOR<AppearanceCreateWithoutPlanetInput, AppearanceUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: AppearanceCreateOrConnectWithoutPlanetInput
    upsert?: AppearanceUpsertWithoutPlanetInput
    disconnect?: AppearanceWhereInput | boolean
    delete?: AppearanceWhereInput | boolean
    connect?: AppearanceWhereUniqueInput
    update?: XOR<XOR<AppearanceUpdateToOneWithWhereWithoutPlanetInput, AppearanceUpdateWithoutPlanetInput>, AppearanceUncheckedUpdateWithoutPlanetInput>
  }

  export type StatsUncheckedUpdateOneWithoutPlanetNestedInput = {
    create?: XOR<StatsCreateWithoutPlanetInput, StatsUncheckedCreateWithoutPlanetInput>
    connectOrCreate?: StatsCreateOrConnectWithoutPlanetInput
    upsert?: StatsUpsertWithoutPlanetInput
    disconnect?: StatsWhereInput | boolean
    delete?: StatsWhereInput | boolean
    connect?: StatsWhereUniqueInput
    update?: XOR<XOR<StatsUpdateToOneWithWhereWithoutPlanetInput, StatsUpdateWithoutPlanetInput>, StatsUncheckedUpdateWithoutPlanetInput>
  }

  export type PlanetCreateNestedOneWithoutAppearanceInput = {
    create?: XOR<PlanetCreateWithoutAppearanceInput, PlanetUncheckedCreateWithoutAppearanceInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutAppearanceInput
    connect?: PlanetWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSurfaceTypeFieldUpdateOperationsInput = {
    set?: $Enums.SurfaceType
  }

  export type PlanetUpdateOneRequiredWithoutAppearanceNestedInput = {
    create?: XOR<PlanetCreateWithoutAppearanceInput, PlanetUncheckedCreateWithoutAppearanceInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutAppearanceInput
    upsert?: PlanetUpsertWithoutAppearanceInput
    connect?: PlanetWhereUniqueInput
    update?: XOR<XOR<PlanetUpdateToOneWithWhereWithoutAppearanceInput, PlanetUpdateWithoutAppearanceInput>, PlanetUncheckedUpdateWithoutAppearanceInput>
  }

  export type PlanetCreateNestedOneWithoutStatsInput = {
    create?: XOR<PlanetCreateWithoutStatsInput, PlanetUncheckedCreateWithoutStatsInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutStatsInput
    connect?: PlanetWhereUniqueInput
  }

  export type PlanetUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<PlanetCreateWithoutStatsInput, PlanetUncheckedCreateWithoutStatsInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutStatsInput
    upsert?: PlanetUpsertWithoutStatsInput
    connect?: PlanetWhereUniqueInput
    update?: XOR<XOR<PlanetUpdateToOneWithWhereWithoutStatsInput, PlanetUpdateWithoutStatsInput>, PlanetUncheckedUpdateWithoutStatsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSurfaceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeFilter<$PrismaModel> | $Enums.SurfaceType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSurfaceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurfaceType | EnumSurfaceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SurfaceType[] | ListEnumSurfaceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSurfaceTypeWithAggregatesFilter<$PrismaModel> | $Enums.SurfaceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSurfaceTypeFilter<$PrismaModel>
    _max?: NestedEnumSurfaceTypeFilter<$PrismaModel>
  }

  export type AppearanceCreateWithoutPlanetInput = {
    id?: string
    color: string
    texture?: string | null
    size: number
    brightness: number
    surfaceType: $Enums.SurfaceType
  }

  export type AppearanceUncheckedCreateWithoutPlanetInput = {
    id?: string
    color: string
    texture?: string | null
    size: number
    brightness: number
    surfaceType: $Enums.SurfaceType
  }

  export type AppearanceCreateOrConnectWithoutPlanetInput = {
    where: AppearanceWhereUniqueInput
    create: XOR<AppearanceCreateWithoutPlanetInput, AppearanceUncheckedCreateWithoutPlanetInput>
  }

  export type StatsCreateWithoutPlanetInput = {
    id?: string
    water: number
    vegetation: number
    atmosphere: number
    temperature: number
    gravity: number
  }

  export type StatsUncheckedCreateWithoutPlanetInput = {
    id?: string
    water: number
    vegetation: number
    atmosphere: number
    temperature: number
    gravity: number
  }

  export type StatsCreateOrConnectWithoutPlanetInput = {
    where: StatsWhereUniqueInput
    create: XOR<StatsCreateWithoutPlanetInput, StatsUncheckedCreateWithoutPlanetInput>
  }

  export type AppearanceUpsertWithoutPlanetInput = {
    update: XOR<AppearanceUpdateWithoutPlanetInput, AppearanceUncheckedUpdateWithoutPlanetInput>
    create: XOR<AppearanceCreateWithoutPlanetInput, AppearanceUncheckedCreateWithoutPlanetInput>
    where?: AppearanceWhereInput
  }

  export type AppearanceUpdateToOneWithWhereWithoutPlanetInput = {
    where?: AppearanceWhereInput
    data: XOR<AppearanceUpdateWithoutPlanetInput, AppearanceUncheckedUpdateWithoutPlanetInput>
  }

  export type AppearanceUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    texture?: NullableStringFieldUpdateOperationsInput | string | null
    size?: FloatFieldUpdateOperationsInput | number
    brightness?: FloatFieldUpdateOperationsInput | number
    surfaceType?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
  }

  export type AppearanceUncheckedUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    texture?: NullableStringFieldUpdateOperationsInput | string | null
    size?: FloatFieldUpdateOperationsInput | number
    brightness?: FloatFieldUpdateOperationsInput | number
    surfaceType?: EnumSurfaceTypeFieldUpdateOperationsInput | $Enums.SurfaceType
  }

  export type StatsUpsertWithoutPlanetInput = {
    update: XOR<StatsUpdateWithoutPlanetInput, StatsUncheckedUpdateWithoutPlanetInput>
    create: XOR<StatsCreateWithoutPlanetInput, StatsUncheckedCreateWithoutPlanetInput>
    where?: StatsWhereInput
  }

  export type StatsUpdateToOneWithWhereWithoutPlanetInput = {
    where?: StatsWhereInput
    data: XOR<StatsUpdateWithoutPlanetInput, StatsUncheckedUpdateWithoutPlanetInput>
  }

  export type StatsUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    vegetation?: FloatFieldUpdateOperationsInput | number
    atmosphere?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    gravity?: FloatFieldUpdateOperationsInput | number
  }

  export type StatsUncheckedUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    vegetation?: FloatFieldUpdateOperationsInput | number
    atmosphere?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    gravity?: FloatFieldUpdateOperationsInput | number
  }

  export type PlanetCreateWithoutAppearanceInput = {
    id?: string
    uuid?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatsCreateNestedOneWithoutPlanetInput
  }

  export type PlanetUncheckedCreateWithoutAppearanceInput = {
    id?: string
    uuid?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stats?: StatsUncheckedCreateNestedOneWithoutPlanetInput
  }

  export type PlanetCreateOrConnectWithoutAppearanceInput = {
    where: PlanetWhereUniqueInput
    create: XOR<PlanetCreateWithoutAppearanceInput, PlanetUncheckedCreateWithoutAppearanceInput>
  }

  export type PlanetUpsertWithoutAppearanceInput = {
    update: XOR<PlanetUpdateWithoutAppearanceInput, PlanetUncheckedUpdateWithoutAppearanceInput>
    create: XOR<PlanetCreateWithoutAppearanceInput, PlanetUncheckedCreateWithoutAppearanceInput>
    where?: PlanetWhereInput
  }

  export type PlanetUpdateToOneWithWhereWithoutAppearanceInput = {
    where?: PlanetWhereInput
    data: XOR<PlanetUpdateWithoutAppearanceInput, PlanetUncheckedUpdateWithoutAppearanceInput>
  }

  export type PlanetUpdateWithoutAppearanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatsUpdateOneWithoutPlanetNestedInput
  }

  export type PlanetUncheckedUpdateWithoutAppearanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: StatsUncheckedUpdateOneWithoutPlanetNestedInput
  }

  export type PlanetCreateWithoutStatsInput = {
    id?: string
    uuid?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appearance?: AppearanceCreateNestedOneWithoutPlanetInput
  }

  export type PlanetUncheckedCreateWithoutStatsInput = {
    id?: string
    uuid?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appearance?: AppearanceUncheckedCreateNestedOneWithoutPlanetInput
  }

  export type PlanetCreateOrConnectWithoutStatsInput = {
    where: PlanetWhereUniqueInput
    create: XOR<PlanetCreateWithoutStatsInput, PlanetUncheckedCreateWithoutStatsInput>
  }

  export type PlanetUpsertWithoutStatsInput = {
    update: XOR<PlanetUpdateWithoutStatsInput, PlanetUncheckedUpdateWithoutStatsInput>
    create: XOR<PlanetCreateWithoutStatsInput, PlanetUncheckedCreateWithoutStatsInput>
    where?: PlanetWhereInput
  }

  export type PlanetUpdateToOneWithWhereWithoutStatsInput = {
    where?: PlanetWhereInput
    data: XOR<PlanetUpdateWithoutStatsInput, PlanetUncheckedUpdateWithoutStatsInput>
  }

  export type PlanetUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appearance?: AppearanceUpdateOneWithoutPlanetNestedInput
  }

  export type PlanetUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appearance?: AppearanceUncheckedUpdateOneWithoutPlanetNestedInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlanetDefaultArgs instead
     */
    export type PlanetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppearanceDefaultArgs instead
     */
    export type AppearanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppearanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatsDefaultArgs instead
     */
    export type StatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}