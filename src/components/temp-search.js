import React from "react";
import TextField from "@material-ui/core/TextField";

export default function App() {
  const handleFocus = (event) => {
    event.preventDefault();
    const { target } = event;
    const extensionStarts = target.value.lastIndexOf(".");
    target.focus();
    target.setSelectionRange(0, extensionStarts);
  };
  return (
    <div>
      <TextField value="myfile.doc" onFocus={handleFocus} />
    </div>
  );
}
