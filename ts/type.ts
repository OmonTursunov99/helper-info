/**
 * Пример типизации
 */
export interface RateBody {}
export interface userAllInOne {}

export interface FormData extends RateBody {
  user: userAllInOne;
  blacklist: boolean;
  actions: {
    [key: string]: boolean;
  }
}

/** |> Пример типизации <| */
