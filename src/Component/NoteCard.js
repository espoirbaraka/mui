import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material'
import { DeleteOutlined } from "@mui/icons-material";

function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          action={
            <IconButton onClick={()=>handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
          {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default NoteCard