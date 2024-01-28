
import React from 'react';
import { Galleria } from 'primereact/galleria';

export default function Galeries(images) {

    const itemTemplate = (item) => {
        return <img src={item.image.myphoto} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} changeItemOnIndicatorHover showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        