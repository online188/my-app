import React from 'react';

function PageContent({ title }) {
  return (
    <main className="container">
      <div className="row main-body">
        <div className="col-lg-12 content mt-4">
          <div className="page-content">
            <h1 style={{ textAlign: 'start', color: '#333', backgroundColor: '#fff', fontSize: '28px', border: 'none' }}>
              <span>{title}</span>
            </h1>
            <div className="box info aligncenter">
              <div className="box-inner-block">
                <i className="fa-solid fa-circle-info" style={{ fontSize: '65px', color: '#2cb4da', float: 'left', marginLeft: '-77px' }}></i>
                <div>
                  INFORMATION:<br />
                  <strong>Model:</strong> Merry<br />
                  <strong>Number of items:</strong> 85 photos<br />
                  <strong>File size:</strong> 463MB<br />
                  <strong>Dimensions:</strong> 3096×4128<br />
                  <strong>Password unrar:</strong> <input type="text" size="11" readOnly value="misskon.com" /><br />
                  Please download to view this album in original quality and without watermark.<br />
                </div>
              </div>
            </div>
            <p style={{ textAlign: 'center' }} className="mt-4 mb-4">
              <a href="https://ouo.io/l0ppTrn" target="_blank" className="shortc-button blue">
                <i className="fa fa fa-download"></i> Download link: MediaFire
              </a>
            </p>
            <p style={{ textAlign: 'center' }} className="mt-4 mb-4">
              <a href="https://ouo.io/l0ppTrn" target="_blank" className="shortc-button green">
                <i className="fa fa fa-download"></i> Download link: TerraBox
              </a>
            </p>
            <p>
              <img src="https://bis.misskon.com/images/2024/05/21/AG.625-Aari-MissKON.com-0081d8bad0469b76d82.webp" style={{ textAlign: 'start', color: '#333', backgroundColor: '#fff', fontSize: '16px', border: 'none' }} alt="" />
              <br />
              <img src="https://bis.misskon.com/images/2024/05/21/AG.625-Aari-MissKON.com-009b98b0595966e7212.webp" style={{ textAlign: 'start', color: '#333', backgroundColor: '#fff', fontSize: '16px', border: 'none' }} alt="" />
              <br />
              <br />
            </p>
          </div>
          <h3 className="ml-4">View More:</h3>
          <div className="row p-4">
            {Array(3).fill().map((_, index) => (
              <div className="view-more col-lg-4 content mt-4" key={index}>
                <a className="yarpp-thumbnail" rel="norewrite" href="https://misskon.com/bololi-vol-054-nguoi-mau-wang-yu-chun-53-anh/" title="BoLoli Vol.054: Người mẫu Wang Yu Chun (王语纯) (53 ảnh)">
                  <img width="310" height="165" src="https://misskon.com/media/2016/10/MrCong.com-BoLoli-Vol.054-Wang-Yu-Chun-000-310x165.jpg" className="attachment-tie-medium size-tie-medium wp-post-image" alt="" data-pin-nopin="true" decoding="async" loading="lazy" />
                  <span className="yarpp-thumbnail-title">BoLoli Vol.054: Người mẫu Wang Yu Chun (王语纯) (53 ảnh)</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageContent;
