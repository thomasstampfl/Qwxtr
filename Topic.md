Topic: Text Editor

Your task is to implement a simplified version of a text editor.

All operations that should be supported are listed below. Partial credit will be given for each implemented operation. Please submit often to ensure partial credits are captured.

Implementation tips

Implement operations and provided steps one by one, and not all together, keeping in mind that you will need to make refactors to support each additional step. In the first three levels you can assume that only one text document is modified.

Note

Level 1
The editor starts with a blank text document, with the cursor at initial position 0.

1. APPEND <text> should append the inputted string text to the document starting from the current position of the cursor. After the operation, the cursor should be at the end of the added string.

2. MOVE <position> should move the cursor to the specified position. The cursor should be positioned between document characters, and are enumerated sequentially starting from 0. If the specified position is out of bounds, then move the cursor to the nearest available position.

3. BACKSPACE should remove the character right before the cursor, if any.

Level 2
Introduce methods to copy a part of the document text.

4. SELECT <left> <right> should select the text between the left and right cursor positions. Selection borders should be returned to the bounds of the document. If the selection is empty, it becomes a cursor position. Any modification operation replace the selected text and places the cursor at the end of the modified segment.

5. COPY should copy the selected text to the clipboard, if there is an active non-empty selection. The current selected text (if any) remains selected after the operation.
6. PASTE should append the text from the clipboard. The current selected text (if any) remains selected after the operation.

Level 3
The text editor should allow document changes to be tracked and reverted. Consider only operations that actually modify the contents of the text document, which are (APPEND, BACKSPACE, PASTE, UNDO, and REDO).

7. UNDO should restore the document to the state before the previous modification or REDO operation. The selection and cursor position should be also restored.

8. REDO can only be performed if the document has not been modified since the last UNDO operation. REDO should restore the state before the previous UNDO operation, including the selection and cursor position. Multiple UNDO and REDO operations can be performed in a row.

Level 4
The text editor should support multiple text documents with a common clipboard.

9. CREATE <name> should create a blank text document name. If such a file already exists, ignore the operation and return empty string. Modification history is stored individually for each document.
10. SWITCH <name> should switch the current document to name. If there is no such file, ignore the operation and return empty string. When switching to a file, the position of the cursor and selection should return to the state in which they were left.

Note: it is guaranteed that all operations from previous levels will be executed on the active document. For backward compatibility, assume for Levels 1-3 there is a single, initially active document.