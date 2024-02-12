"""updated date joined columns to strings

Revision ID: 6ca5eae632c2
Revises: 859d6189af84
Create Date: 2024-02-02 14:30:24.738789

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6ca5eae632c2'
down_revision = '859d6189af84'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('artist_table', schema=None) as batch_op:
        batch_op.alter_column('date_joined',
               existing_type=sa.DATETIME(),
               type_=sa.String(),
               existing_nullable=False)

    with op.batch_alter_table('business_table', schema=None) as batch_op:
        batch_op.alter_column('date_joined',
               existing_type=sa.DATETIME(),
               type_=sa.String(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('business_table', schema=None) as batch_op:
        batch_op.alter_column('date_joined',
               existing_type=sa.String(),
               type_=sa.DATETIME(),
               existing_nullable=False)

    with op.batch_alter_table('artist_table', schema=None) as batch_op:
        batch_op.alter_column('date_joined',
               existing_type=sa.String(),
               type_=sa.DATETIME(),
               existing_nullable=False)

    # ### end Alembic commands ###