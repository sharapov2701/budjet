import { DateTime } from 'luxon'
import { Operation, GroupedOperations } from './types'

export const sortDates = (a: Operation, b: Operation) => DateTime.fromFormat(b.date, "dd.MM.yyyy").toSeconds() - DateTime.fromFormat(a.date, "dd.MM.yyyy").toSeconds()

export const groupOperationsByDate = (operations: Operation[]): GroupedOperations => {
    const result: GroupedOperations = {}
    operations.forEach(operation => {
        if (result[operation.date]) {
            result[operation.date] = [...result[operation.date], operation]
        } else {
            result[operation.date] = [operation]
        }
    })
    return result
}