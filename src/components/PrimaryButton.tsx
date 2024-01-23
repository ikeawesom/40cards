"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export type ButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function PrimaryButton(props: ButtonType) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ? props.type : "button"}
      className={twMerge(
        "shadow-sm text-sm duration-150 rounded-lg bg-blue-600 text-gray-50 px-6 py-2",
        `${
          props.disabled
            ? "opacity-70 cursor-not-allowed"
            : "hover:brightness-95"
        }`,
        props.className
      )}
    >
      {props.children ? props.children : "Click Me"}
    </button>
  );
}
