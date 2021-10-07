import "./InlineEdit.css";
import * as React from "react";

function InlineEdit({
  value,
  setValue,
  multi = false
}: {
  value: string;
  setValue: (str: string) => void;
  multi?: boolean;
}) {
  const [editingValue, setEditingValue] = React.useState(value);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEditingValue(e.currentTarget.value);

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.currentTarget.blur();
    }
  };

  const onBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.currentTarget.value.trim() === "") {
      setValue(value);
    } else {
      setValue(e.currentTarget.value);
    }
  };

  // Stackoverflow hack to get dynamic looking textarea
  const onInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.scrollHeight > 33) {
      e.currentTarget.style.height = "5px";
      e.currentTarget.style.height = e.currentTarget.scrollHeight - 16 + "px";
    }
  };

  return multi ? (
    <>
      <textarea
        rows={2}
        aria-label="multiline comment"
        value={editingValue}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onInput={onInput}
      />
    </>
  ) : (
    <>
      <input
        type="text"
        aria-label="todo add dynamic field name"
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
    </>
  );
}

export { InlineEdit };
