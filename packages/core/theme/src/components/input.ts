import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {dataFocusVisibleClasses, groupDataFocusVisibleClasses} from "../utils";

/**
 * Input wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, label, inputWrapper, input, clearButton, description, errorMessage} = input({...})
 *
 * <div className={base())}>
 *  <label className={label()}>Label</label>
 *  <div className={inputWrapper()}>
 *    <input className={input()}/>
 *    <button className={clearButton()}>Clear</button>
 *  </div>
 *  <span className={description()}>Description</span>
 *  <span className={errorMessage()}>Invalid input</span>
 * </div>
 * ```
 */
const input = tv({
  slots: {
    base: "group flex flex-col",
    label: [
      "absolute",
      "z-10",
      "pointer-events-none",
      "origin-top-left",
      "subpixel-antialiased",
      "block",
      "text-small",
      "text-foreground-500",
    ],
    mainWrapper: "h-full",
    inputWrapper:
      "relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3",
    innerWrapper: "inline-flex w-full items-center h-full box-border",
    input: [
      "w-full font-normal !bg-transparent outline-none placeholder:text-foreground-500",
      "data-[has-start-content=true]:ps-1.5",
      "data-[has-end-content=true]:pe-1.5",
    ],
    clearButton: [
      "p-2",
      "-m-2",
      "z-10",
      "hidden",
      "absolute",
      "right-3",
      "appearance-none",
      "outline-none",
      "select-none",
      "opacity-0",
      "hover:!opacity-100",
      "cursor-pointer",
      "active:!opacity-70",
      "rounded-full",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    helperWrapper: "flex relative flex-col gap-1.5 pt-1 px-1",
    description: "text-tiny text-foreground-400",
    errorMessage: "text-tiny text-danger",
  },
  variants: {
    variant: {
      flat: {
        inputWrapper: [
          "bg-default-100",
          "data-[hover=true]:bg-default-200",
          "group-data-[focus=true]:bg-default-100",
        ],
      },
      faded: {
        inputWrapper: [
          "bg-default-100",
          "border-medium",
          "border-default-200",
          "data-[hover=true]:border-default-400",
        ],
      },
      bordered: {
        inputWrapper: [
          "border-medium",
          "border-default-200",
          "data-[hover=true]:border-default-400",
          "group-data-[focus=true]:border-foreground",
        ],
      },
      underlined: {
        inputWrapper: [
          "!px-1",
          "!pb-0",
          "!gap-0",
          "relative",
          "box-border",
          "border-b-medium",
          "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
          "border-default-200",
          "!rounded-none",
          "hover:border-default-300",
          "after:content-['']",
          "after:w-0",
          "after:origin-center",
          "after:bg-foreground",
          "after:absolute",
          "after:left-1/2",
          "after:-translate-x-1/2",
          "after:-bottom-[2px]",
          "after:h-[2px]",
          "group-data-[focus=true]:after:w-full",
        ],
        innerWrapper: "pb-1",
      },
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      sm: {
        label: "text-tiny",
        inputWrapper: "h-unit-8 min-h-unit-8 px-2 rounded-small",
        input: "text-small",
        clearButton: "text-medium",
      },
      md: {
        inputWrapper: "h-unit-10 min-h-unit-10 rounded-medium",
        input: "text-small",
        clearButton: "text-large",
      },
      lg: {
        inputWrapper: "h-unit-12 min-h-unit-12 rounded-large",
        input: "text-medium",
        clearButton: "text-large",
      },
    },
    radius: {
      none: {
        inputWrapper: "rounded-none",
      },
      sm: {
        inputWrapper: "rounded-small",
      },
      md: {
        inputWrapper: "rounded-medium",
      },
      lg: {
        inputWrapper: "rounded-large",
      },
      full: {
        inputWrapper: "rounded-full",
      },
    },
    labelPlacement: {
      outside: {
        label: "text-foreground pb-1.5",
        mainWrapper: "flex flex-col",
      },
      "outside-left": {
        base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
        inputWrapper: "flex-1",
        mainWrapper: "flex flex-col",
        label: "relative text-foreground pr-2",
      },
      inside: {
        label: "text-tiny cursor-text group-data-[filled-within=true]:text-foreground-600",
        inputWrapper: "flex-col items-start justify-center gap-0",
        innerWrapper: "items-end",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    isClearable: {
      true: {
        input: "peer pr-6",
        clearButton: "peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
        inputWrapper: "pointer-events-none",
        label: "pointer-events-none",
      },
    },
    isInvalid: {
      true: {
        label: "!text-danger",
        input: "placeholder:text-danger text-danger",
      },
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
    isMultiline: {
      true: {
        inputWrapper: "!h-auto",
        input: "resize-none py-2",
      },
    },
    disableAnimation: {
      true: {
        inputWrapper: "transition-none",
        label: "transition-none",
      },
      false: {
        inputWrapper: "transition-background motion-reduce:transition-none !duration-150",
        label: [
          "will-change-auto",
          "!duration-200",
          "!ease-out",
          "motion-reduce:transition-none",
          "transition-[transform,color,left,opacity]",
        ],
        clearButton: ["transition-opacity", "motion-reduce:transition-none"],
      },
    },
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
    size: "md",
    fullWidth: true,
    labelPlacement: "inside",
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // flat & color
    {
      variant: "flat",
      color: "primary",
      class: {
        inputWrapper: [
          "bg-primary-50",
          "data-[hover=true]:bg-primary-100",
          "text-primary",
          "group-data-[focus=true]:bg-primary-50",
          "placeholder:text-primary",
        ],
        input: "placeholder:text-primary",
        label: "text-primary",
      },
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        inputWrapper: [
          "bg-secondary-50",
          "text-secondary",
          "data-[hover=true]:bg-secondary-100",
          "group-data-[focus=true]:bg-secondary-50",
          "placeholder:text-secondary",
        ],
        input: "placeholder:text-secondary",
        label: "text-secondary",
      },
    },
    {
      variant: "flat",
      color: "success",
      class: {
        inputWrapper: [
          "bg-success-50",
          "text-success-600",
          "dark:text-success",
          "placeholder:text-success-600",
          "dark:placeholder:text-success",
          "data-[hover=true]:bg-success-100",
          "group-data-[focus=true]:bg-success-50",
        ],
        input: "placeholder:text-success-600 dark:placeholder:text-success",
        label: "text-success-600 dark:text-success",
      },
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        inputWrapper: [
          "bg-warning-50",
          "text-warning-600",
          "dark:text-warning",
          "placeholder:text-warning-600",
          "dark:placeholder:text-warning",
          "data-[hover=true]:bg-warning-100",
          "group-data-[focus=true]:bg-warning-50",
        ],
        input: "placeholder:text-warning-600 dark:placeholder:text-warning",
        label: "text-warning-600 dark:text-warning",
      },
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        inputWrapper: [
          "bg-danger-50",
          "text-danger",
          "dark:text-danger-500",
          "placeholder:text-danger",
          "dark:placeholder:text-danger-500",
          "data-[hover=true]:bg-danger-100",
          "group-data-[focus=true]:bg-danger-50",
        ],
        input: "placeholder:text-danger dark:placeholder:text-danger-500",
        label: "text-danger dark:text-danger-500",
      },
    },
    // faded & color
    {
      variant: "faded",
      color: "primary",
      class: {
        label: "text-primary",
        inputWrapper: "data-[hover=true]:border-primary focus-within:border-primary",
      },
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        label: "text-secondary",
        inputWrapper: "data-[hover=true]:border-secondary focus-within:border-secondary",
      },
    },
    {
      variant: "faded",
      color: "success",
      class: {
        label: "text-success",
        inputWrapper: "data-[hover=true]:border-success focus-within:border-success",
      },
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        label: "text-warning",
        inputWrapper: "data-[hover=true]:border-warning focus-within:border-warning",
      },
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        label: "text-danger",
        inputWrapper: "data-[hover=true]:border-danger focus-within:border-danger",
      },
    },
    // underlined & color
    {
      variant: "underlined",
      color: "primary",
      class: {
        inputWrapper: "after:bg-primary",
        label: "text-primary",
      },
    },
    {
      variant: "underlined",
      color: "secondary",
      class: {
        inputWrapper: "after:bg-secondary",
        label: "text-secondary",
      },
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        inputWrapper: "after:bg-success",
        label: "text-success",
      },
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        inputWrapper: "after:bg-warning",
        label: "text-warning",
      },
    },
    {
      variant: "underlined",
      color: "danger",
      class: {
        inputWrapper: "after:bg-danger",
        label: "text-danger",
      },
    },
    // bordered & color
    {
      variant: "bordered",
      color: "primary",
      class: {
        inputWrapper: "group-data-[focus=true]:border-primary",
        label: "text-primary",
      },
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        inputWrapper: "group-data-[focus=true]:border-secondary",
        label: "text-secondary",
      },
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        inputWrapper: "group-data-[focus=true]:border-success",
        label: "text-success",
      },
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        inputWrapper: "group-data-[focus=true]:border-warning",
        label: "text-warning",
      },
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        inputWrapper: "group-data-[focus=true]:border-danger",
        label: "text-danger",
      },
    },
    // radius-full & size
    {
      radius: "full",
      size: ["sm"],
      class: {
        inputWrapper: "px-3",
      },
    },
    {
      radius: "full",
      size: "md",
      class: {
        inputWrapper: "px-4",
      },
    },
    {
      radius: "full",
      size: "lg",
      class: {
        inputWrapper: "px-5",
      },
    },
    // !disableAnimation & variant
    {
      disableAnimation: false,
      variant: ["faded", "bordered"],
      class: {
        inputWrapper: "transition-colors motion-reduce:transition-none",
      },
    },
    {
      disableAnimation: false,
      variant: "underlined",
      class: {
        inputWrapper: "after:transition-width motion-reduce:after:transition-none",
      },
    },
    // flat & faded
    {
      variant: ["flat", "faded"],
      class: {
        inputWrapper: [
          // focus ring
          ...groupDataFocusVisibleClasses,
        ],
      },
    },
    // isInvalid & variant
    {
      isInvalid: true,
      variant: "flat",
      class: {
        inputWrapper: [
          "bg-danger-50",
          "data-[hover=true]:bg-danger-100",
          "group-data-[focus=true]:bg-danger-50",
        ],
      },
    },
    {
      isInvalid: true,
      variant: "bordered",
      class: {
        inputWrapper: "!border-danger group-data-[focus=true]:border-danger",
      },
    },
    {
      isInvalid: true,
      variant: "underlined",
      class: {
        inputWrapper: "after:bg-danger",
      },
    },
    // size & labelPlacement
    {
      labelPlacement: "inside",
      size: "sm",
      class: {
        inputWrapper: "h-12 py-1.5 px-3",
      },
    },
    {
      labelPlacement: "inside",
      size: "md",
      class: {
        inputWrapper: "h-14 py-2",
      },
    },
    {
      labelPlacement: "inside",
      size: "lg",
      class: {
        label: "text-small",
        inputWrapper: "h-16 py-2.5 gap-0",
      },
    },
    // size & labelPlacement & variant=[faded, bordered]
    {
      labelPlacement: "inside",
      size: "sm",
      variant: ["bordered", "faded"],
      class: {
        inputWrapper: "py-1",
      },
    },
    // labelPlacement=[inside,outside]
    {
      labelPlacement: ["inside", "outside"],
      class: {
        label: ["group-data-[filled-within=true]:pointer-events-auto"],
      },
    },
    // labelPlacement=[outside,outside-left]
    {
      labelPlacement: ["outside", "outside-left"],
      class: {
        input: "h-full",
      },
    },
    {
      labelPlacement: "outside",
      class: {
        base: "group relative justify-end",
        label: [
          "pb-0",
          "z-20",
          "opacity-60",
          "top-1/2",
          "-translate-y-1/2",
          "group-data-[filled-within=true]:left-0",
          "group-data-[filled-within=true]:opacity-100",
        ],
      },
    },
    // labelPlacement=[inside]
    {
      labelPlacement: ["inside"],
      class: {
        label: ["group-data-[filled-within=true]:scale-85"],
      },
    },
    // labelPlacement=[inside] & variant=flat
    {
      labelPlacement: ["inside"],
      variant: "flat",
      size: ["md", "lg"],
      class: {
        innerWrapper: "pb-0.5",
      },
    },
    // variant=underlined & size
    {
      variant: "underlined",
      size: "sm",
      class: {
        innerWrapper: "pb-1",
      },
    },
    {
      variant: "underlined",
      size: ["md", "lg"],
      class: {
        innerWrapper: "pb-1.5",
      },
    },
    // inside & size
    {
      labelPlacement: "inside",
      size: ["sm", "md"],
      class: {
        label: "text-small",
      },
    },
    {
      labelPlacement: "inside",
      size: "sm",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      size: "md",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      size: "lg",
      class: {
        label: [
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]",
        ],
      },
    },
    // inside & size & [faded, bordered]
    {
      labelPlacement: "inside",
      variant: ["faded", "bordered"],
      size: "sm",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      variant: ["faded", "bordered"],
      size: "md",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      variant: ["faded", "bordered"],
      size: "lg",
      class: {
        label: [
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]",
        ],
      },
    },
    // inside & size & underlined
    {
      labelPlacement: "inside",
      variant: "underlined",
      size: "sm",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      variant: "underlined",
      size: "md",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      variant: "underlined",
      size: "lg",
      class: {
        label: [
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]",
        ],
      },
    },
    // outside & size
    {
      labelPlacement: "outside",
      size: "sm",
      class: {
        label: [
          "left-2",
          "text-tiny",
          "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]",
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]",
      },
    },
    {
      labelPlacement: "outside",
      size: "md",
      class: {
        label: [
          "left-3",
          "text-small",
          "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]",
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]",
      },
    },
    {
      labelPlacement: "outside",
      size: "lg",
      class: {
        label: [
          "left-3",
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]",
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]",
      },
    },
    // outside-left & size & hasHelper
    {
      labelPlacement: "outside-left",
      size: "sm",
      class: {
        label: "group-data-[has-helper=true]:pt-2",
      },
    },
    {
      labelPlacement: "outside-left",
      size: "md",
      class: {
        label: "group-data-[has-helper=true]:pt-3",
      },
    },
    {
      labelPlacement: "outside-left",
      size: "lg",
      class: {
        label: "group-data-[has-helper=true]:pt-4",
      },
    },
  ],
});

export type InputVariantProps = VariantProps<typeof input>;
export type InputSlots = keyof ReturnType<typeof input>;

export {input};
