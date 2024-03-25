export interface CustomerOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export interface BankOption {
  readonly value: String;
  readonly label: string;
}

export interface ProductOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export interface ProductTypeOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const bankOptions: readonly BankOption[] = [
  { value: "01", label: "하나은행" },
  { value: "02", label: "신한은행" },
  { value: "03", label: "국민은행" },
];

export const productOptions: readonly ProductOption[] = [
  { value: "청년희망적금", label: "청년희망적금" },
  { value: "장년노후적금", label: "장년노후적금" },
  { value: "장년노후적금", label: "저스트예금" },
  { value: "싸피노후적금", label: "싸피노후적금" },
];

export const productTypeOptions: readonly ProductTypeOption[] = [
  { value: "적금", label: "적금" },
  { value: "예금", label: "예금" },
  { value: "증권", label: "증권", isDisabled: true },
];

export const customerOptions: readonly CustomerOption[] = [
  { value: "전체", label: "전체", isFixed: true },
  { value: "고수림", label: "고수림", isFixed: true },
  { value: "구본승", label: "구본승" },
  { value: "이유로", label: "이유로" },
  { value: "김희연", label: "김희연", isFixed: true },
  { value: "조아영", label: "조아영" },
  { value: "이정호", label: "이정호" },
  { value: "이상학", label: "이상학" },
  { value: "오형택", label: "오형택" },
  { value: "송윤재", label: "송윤재" },
  { value: "최하슬", label: "최하슬" },
];

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly CustomerOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: "Customers",
    options: customerOptions,
  },
];
