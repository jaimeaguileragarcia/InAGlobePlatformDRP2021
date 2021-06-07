"""Add a column

Revision ID: 6436f970b113
Revises: 35b6f4f7b2bd
Create Date: 2021-06-07 18:22:06.115934

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6436f970b113'
down_revision = '35b6f4f7b2bd'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('user', sa.Column('age', sa.Integer))


def downgrade():
    op.drop_column('user', 'age')
