import Checkbox from 'components/Checkbox';
import { Prefecture } from '@types';
import React from 'react';

interface ListPrefecturesProps {
  prefectures: Prefecture[];
  prefectureCode?: number;
  selectPrefecture?: (code: number) => void;
}

const ListPrefectures = (props: ListPrefecturesProps) => {
  return (
    <div className="col-xs-12 col-md-5">
      <div className="row prefectures-container">
        <h3 className="prefectures-container__title">
          都道府県 ({props.prefectures.length})
        </h3>
      </div>
      <div className="row prefectures-options">
        {props.prefectures.length > 0 &&
          props.prefectures.map((item) => (
            <div
              className="col-xs-4 prefectures-options__item"
              key={item.prefCode}
            >
              <Checkbox
                label={item.prefName}
                value={item.prefCode}
                checked={props.prefectureCode === item.prefCode}
                name="prefectureCode"
                evenHandler={() => {
                  if (props.selectPrefecture) {
                    props.selectPrefecture(item.prefCode);
                  }
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(ListPrefectures);
