const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 37
const float: number = 4.5
const mun: number = 3e10

const str: string = 'hello'

const numberArray: number[] = [1, 2, 3]
const numberArray2: Array<number> = [1, 2, 3]

const words: string[] = ['hello', 'world']

const contact: [string, number] = ['Eldar', 1234567890] //tuple

let variable: any = 37 //Any
variable = 'New'

const sayMyName = (name: string): void => {
    console.log(name)
}

const throwError = (message: string): never => {
    throw new Error(message)
} // Never

const infinite = (): never => {
    while (true) {

    }
}

type Login = string //Alias types
const login: Login = 'str'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined