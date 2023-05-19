import * as React from "react";
import { type Props } from "./Basic";
declare type HeadingProps = React.PropsWithChildren<{
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}> &
  React.HTMLAttributes<HTMLHeadingElement>;
export declare function Heading({
  tag,
  ...props
}: HeadingProps): React.DetailedReactHTMLElement<
  {
    children?: React.ReactNode;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    inputMode?: string | undefined;
    is?: string | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: boolean | "false" | "true" | undefined;
    "aria-autocomplete"?: "inline" | "both" | "none" | "list" | undefined;
    "aria-busy"?: boolean | "false" | "true" | undefined;
    "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?:
      | boolean
      | "location"
      | "time"
      | "false"
      | "step"
      | "true"
      | "page"
      | "date"
      | undefined;
    "aria-describedby"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: boolean | "false" | "true" | undefined;
    "aria-dropeffect"?:
      | "link"
      | "none"
      | "copy"
      | "move"
      | "execute"
      | "popup"
      | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: boolean | "false" | "true" | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: boolean | "false" | "true" | undefined;
    "aria-haspopup"?:
      | boolean
      | "grid"
      | "dialog"
      | "menu"
      | "false"
      | "true"
      | "listbox"
      | "tree"
      | undefined;
    "aria-hidden"?: boolean | "false" | "true" | undefined;
    "aria-invalid"?:
      | boolean
      | "false"
      | "true"
      | "grammar"
      | "spelling"
      | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: boolean | "false" | "true" | undefined;
    "aria-multiline"?: boolean | "false" | "true" | undefined;
    "aria-multiselectable"?: boolean | "false" | "true" | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-readonly"?: boolean | "false" | "true" | undefined;
    "aria-relevant"?:
      | "all"
      | "text"
      | "additions"
      | "additions text"
      | "removals"
      | undefined;
    "aria-required"?: boolean | "false" | "true" | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: boolean | "false" | "true" | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "other" | "ascending" | "descending" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    dangerouslySetInnerHTML?:
      | {
          __html: string;
        }
      | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLHeadingElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLHeadingElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLHeadingElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLHeadingElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLHeadingElement> | undefined;
    onPasteCapture?:
      | React.ClipboardEventHandler<HTMLHeadingElement>
      | undefined;
    onCompositionEnd?:
      | React.CompositionEventHandler<HTMLHeadingElement>
      | undefined;
    onCompositionEndCapture?:
      | React.CompositionEventHandler<HTMLHeadingElement>
      | undefined;
    onCompositionStart?:
      | React.CompositionEventHandler<HTMLHeadingElement>
      | undefined;
    onCompositionStartCapture?:
      | React.CompositionEventHandler<HTMLHeadingElement>
      | undefined;
    onCompositionUpdate?:
      | React.CompositionEventHandler<HTMLHeadingElement>
      | undefined;
    onCompositionUpdateCapture?:
      | React.CompositionEventHandler<HTMLHeadingElement>
      | undefined;
    onFocus?: React.FocusEventHandler<HTMLHeadingElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLHeadingElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLHeadingElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLHeadingElement> | undefined;
    onChange?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onBeforeInputCapture?:
      | React.FormEventHandler<HTMLHeadingElement>
      | undefined;
    onInput?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onReset?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLHeadingElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onError?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLHeadingElement> | undefined;
    onKeyDownCapture?:
      | React.KeyboardEventHandler<HTMLHeadingElement>
      | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLHeadingElement> | undefined;
    onKeyPressCapture?:
      | React.KeyboardEventHandler<HTMLHeadingElement>
      | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLHeadingElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLHeadingElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onCanPlayThroughCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onDurationChangeCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onEmptied?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onEncryptedCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onEnded?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onLoadedDataCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onLoadedMetadataCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onLoadStartCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onPause?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onRateChangeCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onSeeked?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onTimeUpdateCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onVolumeChangeCapture?:
      | React.ReactEventHandler<HTMLHeadingElement>
      | undefined;
    onWaiting?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onContextMenuCapture?:
      | React.MouseEventHandler<HTMLHeadingElement>
      | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onDoubleClickCapture?:
      | React.MouseEventHandler<HTMLHeadingElement>
      | undefined;
    onDrag?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLHeadingElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseDownCapture?:
      | React.MouseEventHandler<HTMLHeadingElement>
      | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseMoveCapture?:
      | React.MouseEventHandler<HTMLHeadingElement>
      | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseOverCapture?:
      | React.MouseEventHandler<HTMLHeadingElement>
      | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLHeadingElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLHeadingElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLHeadingElement> | undefined;
    onTouchCancelCapture?:
      | React.TouchEventHandler<HTMLHeadingElement>
      | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLHeadingElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLHeadingElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLHeadingElement> | undefined;
    onTouchMoveCapture?:
      | React.TouchEventHandler<HTMLHeadingElement>
      | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLHeadingElement> | undefined;
    onTouchStartCapture?:
      | React.TouchEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerDownCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerMoveCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerUpCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerCancelCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerEnterCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerLeaveCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerOverCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLHeadingElement> | undefined;
    onPointerOutCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onGotPointerCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onGotPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onLostPointerCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onLostPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLHeadingElement>
      | undefined;
    onScroll?: React.UIEventHandler<HTMLHeadingElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLHeadingElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLHeadingElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLHeadingElement> | undefined;
    onAnimationStart?:
      | React.AnimationEventHandler<HTMLHeadingElement>
      | undefined;
    onAnimationStartCapture?:
      | React.AnimationEventHandler<HTMLHeadingElement>
      | undefined;
    onAnimationEnd?:
      | React.AnimationEventHandler<HTMLHeadingElement>
      | undefined;
    onAnimationEndCapture?:
      | React.AnimationEventHandler<HTMLHeadingElement>
      | undefined;
    onAnimationIteration?:
      | React.AnimationEventHandler<HTMLHeadingElement>
      | undefined;
    onAnimationIterationCapture?:
      | React.AnimationEventHandler<HTMLHeadingElement>
      | undefined;
    onTransitionEnd?:
      | React.TransitionEventHandler<HTMLHeadingElement>
      | undefined;
    onTransitionEndCapture?:
      | React.TransitionEventHandler<HTMLHeadingElement>
      | undefined;
  },
  HTMLElement
>;
export declare function Paragraph(
  props: Props<"p">
): React.DetailedReactHTMLElement<
  import("./Basic").ElementProps<"p"> & {
    children?: React.ReactNode;
  },
  HTMLElement
>;
export declare function Emphasized(props: Props<"em">): JSX.Element;
export declare function Strong(
  props: Props<"strong">
): React.DetailedReactHTMLElement<
  import("./Basic").ElementProps<"strong"> & {
    children?: React.ReactNode;
  },
  HTMLElement
>;
declare type FigureProps = Props<"figure"> & {
  figure: {
    align: string;
    type: string;
  };
};
export declare function Figure({
  className,
  figure,
  ...props
}: FigureProps): JSX.Element;
export declare function Figcaption(props: Props<"figcaption">): JSX.Element;
export declare function Subscript(props: Props<"sub">): JSX.Element;
export declare function Superscript(props: Props<"sup">): JSX.Element;
export declare function RichText({
  tag,
  className,
  ...props
}: Props<
  "div",
  {
    tag?: React.ElementType;
  }
>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
