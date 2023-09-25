import type {
  BaseEnumFieldOptions,
  BaseFieldAttributes,
} from '@/types/FieldAttributes'
import type {
  PartialFieldInputAttributes,
  PartialFieldSelectAttributes,
  PartialFieldOptionAttributes,
} from '@/types/HTMLAttributes'

type ExtendedFieldInputAttributes = BaseFieldAttributes &
  PartialFieldInputAttributes
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExtendedFieldSelectAttributes = BaseFieldAttributes &
  Omit<PartialFieldSelectAttributes, 'options'> & {
    options: Array<PartialFieldOptionAttributes>
  }

export type InputBooleanFieldOptions = ExtendedFieldInputAttributes & {
  type?: 'checkbox' | 'radio'
}
export type InputStringFieldOptions = ExtendedFieldInputAttributes & {
  type?: 'url' | 'text' | 'password' | 'search'
}
export type InputNumberFieldOptions = ExtendedFieldInputAttributes & {
  type?: 'number'
}

export type InputEnumFieldSelectOptions = BaseEnumFieldOptions & {
  renderAs: 'select'
} & ExtendedFieldSelectAttributes

type InputEnumFieldInputOptions = BaseEnumFieldOptions & {
  renderAs: 'input'
} & InputBooleanFieldOptions

export type InputEnumFieldOptions =
  | InputEnumFieldSelectOptions
  | InputEnumFieldInputOptions
