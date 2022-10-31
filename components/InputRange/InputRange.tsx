import React from "react";
import { FC } from "react";
import { baseTheme } from "../../styles/theme";
import { InputRangeProps } from "./InputRange.props";
import { Range, RangeLabels, RangeItems, Input } from "./InputRange.styles";

export const InputRange: FC<InputRangeProps> = ({
  width,
  count,
  value,
  onChange,
  labels,
  className = "",
}) => {
  return (
    <Range className={className} width={width}>
      <RangeLabels className="range-labels">
        {labels.length > 0 &&
          labels.map((label, index) => (
            <RangeItems
              width={width}
              count={count}
              key={label}
              style={{
                left:
                  ((width - baseTheme.sizes.rangeThumb) / (count - 1)) * index +
                  baseTheme.sizes.rangeThumb / 2,
              }}
            >
              {label}
            </RangeItems>
          ))}
      </RangeLabels>
      <Input
        type="range"
        min="0"
        max={count - 1}
        step="1"
        value={value}
        onChange={onChange}
      />
    </Range>
  );
};
