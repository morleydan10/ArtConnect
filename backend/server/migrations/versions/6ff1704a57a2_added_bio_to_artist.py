"""added bio to artist

Revision ID: 6ff1704a57a2
Revises: aa5dac600ce8
Create Date: 2024-02-13 19:55:01.313695

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6ff1704a57a2'
down_revision = 'aa5dac600ce8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('artist_table', schema=None) as batch_op:
        batch_op.add_column(sa.Column('bio', sa.String(), nullable=True))

    with op.batch_alter_table('bids_table', schema=None) as batch_op:
        batch_op.create_unique_constraint(batch_op.f('uq_bids_table_artist_id'), ['artist_id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bids_table', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('uq_bids_table_artist_id'), type_='unique')

    with op.batch_alter_table('artist_table', schema=None) as batch_op:
        batch_op.drop_column('bio')

    # ### end Alembic commands ###
