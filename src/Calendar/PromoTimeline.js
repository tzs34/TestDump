import React from 'react';
import PromoBar from './PromoBar'
import moment from 'moment'
import TableCell from '@material-ui/core/TableCell';

const generateColumns = (timeline, promotions) => {
    const cols = timeline.map((date) => {
        // Find promo that lies in the week
        const promo = promotions.find(promotion => {
            const promodate = moment(promotion.timestamp)
            const start = moment(date)
            const end = moment(date).add(1, 'weeks')
            console.log(promodate.format(), date.format())
            return promodate.isBetween(start, end)
        })

        if (promo) {
            return {
                span: 1,
                type: promo.promotionType,
            }
        } else {
            return {
                span: 1,
                type: null
            }
        }
    })

    mergeCols(cols)

    const deduped = cols.filter((col) => !col.delete)

    return deduped
}

const mergeCols = (cols) => {
    for(let i = 0; i < cols.length; i++) {
        const curr = cols[i]
        if(i > 0) {
            const prev = cols[i-1]
            if(curr.type === prev.type && curr.type !== null) {
                curr.span = curr.span + prev.span 
                prev.delete = true
            }
        }
    }
}

const PromoTimeline = ({timeline, promotions, onClick}) => {
    const cols = generateColumns(timeline, promotions)

    return (
        <React.Fragment>
           {cols.map((el, idx) => (
               <TableCell style={{borderRight: '1px solid #eaeaea'}} colSpan={el.span}>
                   <PromoBar type={el.type} onClick={onClick} />
                </TableCell>
           ))} 
        </React.Fragment>
    )
}

export default PromoTimeline