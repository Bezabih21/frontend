import React from 'react';
import './page-container.scss';
function PageContainer(props: {
  pageTitle: string | JSX.Element;
  pageParagraph: string;
  img: string;
  formTitle?: string;
  formSubTitle?: string;
  form: string | JSX.Element;
}) {
  return (
    <div className="container mx-auto px-6 md:px-12 py-28">
      <div className="flex justify-between pl-11">
        <div className="img-container flex flex-col justify-around">
          {props.pageTitle}

          <span className="pb-10" style={{ fontSize: '16px' }}>
            {props.pageParagraph}
          </span>
          <img
            style={{ maxWidth: '583px', maxHeight: '350px' }}
            className=""
            src={props.img}
          />
        </div>
        <div className="form-container">
          <div className="rounded-md shadow-2xl">
            <div className="">
              <div className="">
                <h5 className="p-1.5 text-2xl font-bold text-center">
                  {props.formTitle}
                </h5>
                <div
                  className="px-10 text-center"
                  style={{ minWidth: '400px', maxWidth: '400px' }}
                >
                  <small>{props.formSubTitle}</small>
                </div>

                <div
                  className="px-8 pb-4"
                  style={{ minWidth: '464px', maxWidth: '464px' }}
                >
                  {props.form}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageContainer;
