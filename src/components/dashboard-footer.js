import { Typography } from '@mui/material';

export const DashboardFooter = () => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#1e558a',
          minHeight: '190px',
          padding: '30px'
        }}>
        <Typography sx={{ mb: 1 }}>Jiujiang Junxin Trading Co., Ltd.</Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
          <Typography sx={{ mr: 3, mb: 1 }}>Tel：+86 13767233603 </Typography>
          <Typography sx={{ mr: 3, mb: 1 }}>Mob：+86 13767233603</Typography>
          <Typography sx={{ mr: 3, mb: 1 }}>Web：www.junsanfactory.com.au</Typography>
          <Typography>Email: junsanfactory@126.com</Typography>
        </div>
        <Typography sx={{ mb: 1 }}>
          No. 31, Dading Road, Guilin Street, Ruichang City, Jiujiang City, Jiangxi Province
        </Typography>
        <Typography>Copyright © 2022 Jiujiang Junxin Trading Co., Ltd.</Typography>
      </div>
    </>
  );
};
