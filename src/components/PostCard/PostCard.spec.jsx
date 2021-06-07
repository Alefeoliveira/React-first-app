import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () =>{

    it('should render PostCard correctly', () =>{
        render(<PostCard {...props}/>);
    
        expect(screen.getByRole('img', {name: 'title 1'})).toHaveAttribute( 'src', props.cover);
        expect(screen.getByRole('heading', {name: 'title 1'})).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    })

    it('should match with snapshot', () =>{
        const {container} = render(<PostCard {...props}/>);

        expect(container.firstChild).toMatchSnapshot();
    })
});