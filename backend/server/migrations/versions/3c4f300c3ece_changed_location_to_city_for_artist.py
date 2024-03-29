"""changed location to city for artist

Revision ID: 3c4f300c3ece
Revises: bcfd338e612d
Create Date: 2024-01-30 15:47:45.455244

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3c4f300c3ece'
down_revision = 'bcfd338e612d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('artist_table', schema=None) as batch_op:
        batch_op.add_column(sa.Column('city', sa.String(), nullable=True))
        batch_op.drop_column('location')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('artist_table', schema=None) as batch_op:
        batch_op.add_column(sa.Column('location', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('city')

    # ### end Alembic commands ###
