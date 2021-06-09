"""empty message

Revision ID: f9b4de0c3aa1
Revises: 
Create Date: 2021-06-09 10:50:54.643012

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f9b4de0c3aa1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('project',
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('status', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('tag', sa.String(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('files', sa.String(), nullable=True),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('project_tasks',
    sa.Column('project_id', sa.Integer(), nullable=True),
    sa.Column('task_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.PrimaryKeyConstraint('task_id')
    )
    op.create_table('user',
    sa.Column('firstname', sa.String(), nullable=True),
    sa.Column('surname', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('bio', sa.String(), nullable=True),
    sa.Column('joined', sa.String(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('availability', sa.String(), nullable=True),
    sa.Column('partnership_opportunities', sa.String(), nullable=True),
    sa.Column('interests', sa.String(), nullable=True),
    sa.Column('username', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('username')
    )
    op.create_table('user_project',
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('project_id', sa.Integer(), nullable=False),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.ForeignKeyConstraint(['project_id'], ['project.id'], ),
    sa.ForeignKeyConstraint(['username'], ['user.username'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_project')
    op.drop_table('user')
    op.drop_table('project_tasks')
    op.drop_table('project')
    # ### end Alembic commands ###
