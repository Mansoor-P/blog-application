import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlock from "@tiptap/extension-code-block";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Toolbar from "../RichTextEditor/Toolbar";

const EditorComponent = ({ formData, setFormData }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Strike,
      Underline,
      Blockquote,
      OrderedList,
      BulletList,
      CodeBlock,
      TextStyle,
      Image,
      Link,
    ],
    content: formData.content,
    onUpdate: ({ editor }) => {
      setFormData((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  return (
    <>
      <Toolbar editor={editor} />
      <div className="border p-4 rounded-lg max-h-[300px] overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default EditorComponent;
