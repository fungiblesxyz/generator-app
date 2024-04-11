import { type Address } from 'viem'

export type Seed = {
  isDynamic?: boolean
  seed: bigint
  extra: bigint
  owner: Address
}

export type Inscription = {
  svg: string
  seed: Seed
  meta: Record<string, any>
}

export type SeedNoBigint = {
  isDynamic?: boolean
  seed: string
  extra: string
  owner: Address
}

export type InscriptionNoBigint = {
  svg: string
  seed: SeedNoBigint
  meta: Record<string, any>
}
