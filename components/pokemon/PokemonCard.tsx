import { Card, Grid, Row, Text } from '@nextui-org/react';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, img, name } = pokemon;
  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid onClick={onClick} xs={12} sm={6} md={3} lg={2} xl={1} key={id}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width='100%' height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};