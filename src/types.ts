export type Indexable = {
  id: number,
};

export type UserBasic = {
  username: string,
  password: string,
}

export type UserElements = Indexable & {
  accountId: number
}

export type User = UserBasic & UserElements;