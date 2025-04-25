export interface CardProps {
    title: string;
    content: string;
    backgroundColor?: string;
    borderColor?: string;
}

export const Card = ({
    title,
    content,
    backgroundColor = '#fff',
    borderColor = '#000',
    ...props
}: CardProps) => {
  return (
    <div style={{  backgroundColor, borderColor, borderWidth: '2px', borderStyle: 'solid', padding: '20px', borderRadius: '8px' }} {...props}>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  );
}