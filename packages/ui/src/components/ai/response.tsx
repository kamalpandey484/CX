"use client"

import type { HTMLAttributes } from "react"
import { memo } from "react"
import ReactMarkdown, { type Options } from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@workspace/ui/lib/utils"

export type AIResponseProps = HTMLAttributes<HTMLDivElement> & {
  options?: Options
  children: Options["children"]
}

const components: Options["components"] = {
  ol: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <ol className={cn("ml-4 list-outside list-decimal", className)} {...rest}>
        {children}
      </ol>
    )
  },
  li: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <li className={cn("py-1", className)} {...rest}>
        {children}
      </li>
    )
  },
  ul: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, className, ordered, ...rest } = props
    return (
      <ul className={cn("ml-4 list-outside list-disc", className)} {...rest}>
        {children}
      </ul>
    )
  },
  strong: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <span className={cn("font-semibold", className)} {...rest}>
        {children}
      </span>
    )
  },
  a: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <a
        className={cn("font-medium text-primary underline", className)}
        rel="noreferrer"
        target="_blank"
        {...rest}
      >
        {children}
      </a>
    )
  },
  h1: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <h1
        className={cn("mt-6 mb-2 text-3xl font-semibold", className)}
        {...rest}
      >
        {children}
      </h1>
    )
  },
  h2: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <h2
        className={cn("mt-6 mb-2 text-2xl font-semibold", className)}
        {...rest}
      >
        {children}
      </h2>
    )
  },
  h3: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <h3
        className={cn("mt-6 mb-2 text-xl font-semibold", className)}
        {...rest}
      >
        {children}
      </h3>
    )
  },
  h4: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <h4
        className={cn("mt-6 mb-2 text-lg font-semibold", className)}
        {...rest}
      >
        {children}
      </h4>
    )
  },
  h5: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <h5
        className={cn("mt-6 mb-2 text-base font-semibold", className)}
        {...rest}
      >
        {children}
      </h5>
    )
  },
  h6: (props: any) => {
    const { children, className, ...rest } = props
    return (
      <h6
        className={cn("mt-6 mb-2 text-sm font-semibold", className)}
        {...rest}
      >
        {children}
      </h6>
    )
  },
}

export const AIResponse = memo(
  ({ className, options, children, ...props }: AIResponseProps) => (
    <div
      className={cn(
        "size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
        className
      )}
      {...props}
    >
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm]}
        {...options}
      >
        {children}
      </ReactMarkdown>
    </div>
  ),
  (prevProps, nextProps) => prevProps.children === nextProps.children
)

AIResponse.displayName = "AIResponse"
