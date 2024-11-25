import { createUseStyles } from "react-jss"

type DetailGroupProps = {
  detail: string,
  value: string | string[]
}

export const DetailGroup = ({ detail, value }: DetailGroupProps) => {
  const classes = useStyles();

  return (
    <div className={classes.detailGroup}>
      <p className={classes.detail}>{`${detail.toUpperCase()}: `}</p>
      <p className={classes.value}>{Array.isArray(value) ? value.join(', ') : value}</p>
    </div>
  )
}

const useStyles = createUseStyles(
  {
    'detailGroup': {
      width: '90%',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'end',
      marginBottom: '1rem',
    },
    'detail': {
      margin: '0',
      fontSize: '24px',
      alignSelf: 'end',
    },
    'value': {
      margin: '0 0 0 1rem',
      alignSelf: 'end',
    },
  },
  { name: 'DetailGroup' }
)
