import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import React, { useRef, useState, useEffect } from 'react'

const CLOUDINARY_UPLOAD_PRESET = 'sosioloji'
const CLOUDINARY_CLOUD_NAME = 'dunid4t4g'

interface TiptapEditorProps {
  value: string
  onChange: (newContent: string) => void
}

const jobBodyPlaceholder = `Job Description:
Provide a concise summary of the role, its purpose and the team.

Responsibilities:
• Lead and deliver key projects
• Collaborate with cross-functional teams
• Write clean, testable code
• Mentor junior engineers
• Communicate status and blockers

Requirements:
• X years experience in relevant field
• Strong problem solving skills
• Good communication and teamwork
• Relevant tools/stack experience

Benefits:
• Competitive salary
• Health benefits
• Flexible hours
`

const TiptapEditor: React.FC<TiptapEditorProps> = ({ value, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') return jobBodyPlaceholder
          return jobBodyPlaceholder
        },
        showOnlyCurrent: false,
        emptyEditorClass: 'is-editor-empty',
        emptyNodeClass: 'is-empty',
        includeChildren: true,
      }),
    ],
    content: value || '<h1></h1><p></p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '<h1></h1><p></p>')
    }
  }, [value, editor])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return

    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      )
      const data = await res.json()
      const url = data.secure_url
      editor.chain().focus().setImage({ src: url }).run()
    } catch (error) {
      console.error('Upload failed:', error)
    }
  }

  if (!editor) return null

  return (
    <div
      className={`editor-wrapper border border-gray-300 rounded-lg ${
        isFullscreen ? 'fixed inset-0 bg-white z-50 p-6' : ''
      }`}
    >
      {/* Toolbar */}
      <div className="toolbar flex flex-wrap gap-2 mb-3 border-b pb-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive('bold') ? 'bg-gray-200' : ''
          }`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive('italic') ? 'bg-gray-200' : ''
          }`}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive('underline') ? 'bg-gray-200' : ''
          }`}
        >
          Underline
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-2 py-1 rounded ${
            editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-2 py-1 rounded ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 rounded ${
            editor.isActive('bulletList') ? 'bg-gray-200' : ''
          }`}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="px-2 py-1 rounded"
        >
          ―
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="px-2 py-1 rounded"
        >
          Upload Image
        </button>
        <button
          type="button"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="ml-auto px-2 py-1 rounded bg-gray-100"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>

      {/* Hidden Image Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageUpload}
      />

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="custom-editor min-h-[400px] p-4 prose max-w-none focus:outline-none"
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.stopPropagation()
        }}
      />
    </div>
  )
}

export default TiptapEditor
