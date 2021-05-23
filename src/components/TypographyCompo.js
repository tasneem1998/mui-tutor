import React from 'react'
import {Typography} from "@material-ui/core"

export const TypographyCompo = () => {
    return (
        <div>
            {/* 2. Typography component h1 to h6, subtitle1 & subtitle2, body1 & body2*/}
            <Typography variant="h3" color="secondary" align="center">Heading3</Typography>
            <Typography variant="h5">subtitle1</Typography> <Typography variant="subtitle1" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit atque quibusdam provident, alias dolore nam modi. Tempore quas ea iure rem et blanditiis maiores praesentium sint pariatur? Nesciunt reiciendis quos nisi beatae eius deleniti, aliquam necessitatibus, animi, rerum asperiores adipisci. Cum modi quibusdam iste nostrum eaque perferendis! Laborum voluptatem, molestiae asperiores eveniet et, error voluptate at suscipit praesentium aliquid enim consectetur autem? Ipsam hic exercitationem, atque laboriosam ducimus voluptatum possimus sit, accusamus suscipit ab ipsa laborum assumenda? Ullam, earum.</Typography>
            <Typography variant="h6" display="inline">body2</Typography> <Typography variant="body2" display="inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis tempore impedit, facere nihil laboriosam dicta temporibus amet cupiditate explicabo! Animi sequi sit sapiente officia, voluptates deleniti autem amet cumque?</Typography>
        </div>
    )
}
