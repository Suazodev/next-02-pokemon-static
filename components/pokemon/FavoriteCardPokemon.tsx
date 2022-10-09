import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid onClick={onFavoriteClicked} xs={12} sm={6} md={3} lg={2} xl={1}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
