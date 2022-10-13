import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template';
// import {createTable} from '@/components/table/table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return createTable(20)
  }
}
