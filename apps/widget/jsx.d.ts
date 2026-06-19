// React 19's @types/react removed the global `JSX` namespace (it now lives under
// `React.JSX`). react-markdown@8 ships .ts source files that still reference the
// global `JSX.IntrinsicElements`, which `skipLibCheck` does not skip. Restore the
// global namespace as an alias of React's so those files type-check.
import type { JSX as ReactJSX } from "react"

declare global {
  namespace JSX {
    type ElementType = ReactJSX.ElementType
    type Element = ReactJSX.Element
    type ElementClass = ReactJSX.ElementClass
    type ElementAttributesProperty = ReactJSX.ElementAttributesProperty
    type ElementChildrenAttribute = ReactJSX.ElementChildrenAttribute
    type LibraryManagedAttributes<C, P> = ReactJSX.LibraryManagedAttributes<C, P>
    type IntrinsicAttributes = ReactJSX.IntrinsicAttributes
    type IntrinsicClassAttributes<T> = ReactJSX.IntrinsicClassAttributes<T>
    type IntrinsicElements = ReactJSX.IntrinsicElements
  }
}
