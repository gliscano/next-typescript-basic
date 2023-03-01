import { FC } from 'react';

interface Props {
  children: React.ReactNode
}

const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '5px',
      padding: '30px',
      marginTop: '10px'
    }}>
      {children}
    </div>
  )
}

export default DarkLayout;