import { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { NavigateFunction, useNavigate } from "react-router-dom"

type ModalProps = {
  children: React.ReactNode
}

export const Modal = ({ children }: ModalProps) => {
  const classes = useStyles();
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose(e)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClose = (e:
    React.MouseEvent<HTMLDivElement> |
    React.MouseEvent<HTMLButtonElement> |
    KeyboardEvent
  ) => {
    e.stopPropagation()
    navigate(-1)
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <button className={classes.closeButton} onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  )
}

const useStyles = createUseStyles(
  {
    root: {
      zIndex: '101',
      position: 'absolute',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: '75%',
      height: '75%',
      background: '#171E2b',
      borderRadius: '2rem',
      padding: '4rem',
      color: 'black',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      width: '3rem',
      height: '3rem',
      borderRadius: '10px',
      background: 'gray',
      color: 'black',
      fontSize: '2rem',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '5px 5px 10px black',
      transition: 'all 200ms ease-out',

      '&:hover': {
        background: 'white',
        boxShadow: '8px 8px 10px black',
        width: '3.1rem',
        height: '3.1rem',
      },
      '&:active': {
        boxShadow: '5px 5px 5px black',
        width: '2.9rem',
        height: '2.9rem',
      },
    }
  },
  { name: 'Modal' }
);
