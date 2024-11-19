import { FC } from 'react';
import { MarkAllAsUnpackedProps } from '../global';

const MarkAllAsUnpacked: FC<MarkAllAsUnpackedProps> = ({ onClick }) => (
  <div className="mb-16">
    <button className="w-full" onClick={onClick}>
      🏠 Mark All As Unpacked
    </button>
  </div>
);

export default MarkAllAsUnpacked;