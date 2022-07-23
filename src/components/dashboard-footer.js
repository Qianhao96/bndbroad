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
        <Typography sx={{ mb: 1 }}>
          Bonade Enterprise Management Consulting (Shenzhen) Co., Ltd.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
          <Typography sx={{ mr: 3, mb: 1 }}>Tel：+86 0755 2826 8813 </Typography>
          <Typography sx={{ mr: 3, mb: 1 }}>Mob：+86 136 3261 1713</Typography>
          <Typography sx={{ mr: 3, mb: 1 }}>Web：www.bndbroad.com Email:</Typography>
          <Typography>yolanda@bndbroad.com</Typography>
        </div>
        <Typography sx={{ mb: 1 }}>
          Adree: Room 519, Chengtou Business Center, Qinglin Road, Huanggekeng Community, Longcheng
          Street, Longgang District, Shenzhen city,Guangdong Province, China.
        </Typography>
        <Typography>
          Copyright © 2021 Bonade Enterprise Management Consulting (Shenzhen) Co., Ltd.
        </Typography>
      </div>
    </>
  );
};
